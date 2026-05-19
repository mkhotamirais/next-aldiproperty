"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { propertiesData } from "@/data/properties"; // Pastikan path sesuai struktur proyekmu

export default function Gallery() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [selectedPropertyIdx, setSelectedPropertyIdx] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  // State visibilitas panah melayang untuk menu 10 rumah (Atas)
  const [showMenuLeftArrow, setShowMenuLeftArrow] = useState(false);
  const [showMenuRightArrow, setShowMenuRightArrow] = useState(false);

  // State visibilitas panah melayang untuk thumbnail (Bawah)
  const [showThumbLeftArrow, setShowThumbLeftArrow] = useState(false);
  const [showThumbRightArrow, setShowThumbRightArrow] = useState(false);

  // ==========================================
  // REFS & DATA BINDING
  // ==========================================
  const propertyNavRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const currentProperty = propertiesData[selectedPropertyIdx];
  const propertyImages = currentProperty?.images || [];

  // ==========================================
  // LOGIKA SCROLL & DETEKSI MENTOK (ABSOLUTE PINTAR)
  // ==========================================

  const handleMenuScrollStatus = () => {
    if (propertyNavRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = propertyNavRef.current;
      setShowMenuLeftArrow(scrollLeft > 5); // Beri toleransi 5px agar aman dari pembulatan browser
      setShowMenuRightArrow(scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const handleThumbScrollStatus = () => {
    if (thumbnailContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = thumbnailContainerRef.current;
      setShowThumbLeftArrow(scrollLeft > 5);
      setShowThumbRightArrow(scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scrollPropertyNav = (direction: "left" | "right") => {
    if (propertyNavRef.current) {
      const scrollAmount = 240;
      propertyNavRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailContainerRef.current) {
      const scrollAmount = 200;
      thumbnailContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Trigger ulang deteksi setiap kali user mengubah unit rumah pilihan
  useEffect(() => {
    const timer = setTimeout(() => {
      handleMenuScrollStatus();
      handleThumbScrollStatus();
    }, 120);

    return () => clearTimeout(timer);
  }, [selectedPropertyIdx]);

  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-8 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Arsitektur & Estetika</span>
          <h2 className="text-3xl font-bold tracking-tight">Galeri Koleksi Hunian</h2>
        </div>

        {/* PILIHAN 10 RUMAH (Tab Menu dengan Panah Melayang Sejajar) */}
        <div className="relative mb-8 pt-5 border-b border-zinc-200 group/menu">
          {/* Panah Kiri Menu - Muncul hanya jika tidak mentok kiri */}
          <button
            type="button"
            onClick={() => scrollPropertyNav("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/95 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 pb-0.5 ${
              showMenuLeftArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
            aria-label="Scroll menu left"
          >
            ←
          </button>

          {/* Baris Menu Utama (px-2 disiapkan agar teks ujung tidak tertutup panah) */}
          <div
            ref={propertyNavRef}
            onScroll={handleMenuScrollStatus}
            className="w-full flex gap-6 overflow-x-auto pb-3 px-1 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden [ms-overflow-style:none]"
          >
            {propertiesData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedPropertyIdx(idx);
                  setActiveIdx(0);
                }}
                className={`whitespace-nowrap pb-2 text-sm font-medium transition-all relative ${
                  selectedPropertyIdx === idx ? "text-amber-600 font-semibold" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {item.name}
                {selectedPropertyIdx === idx && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full animate-fadeIn" />
                )}
              </button>
            ))}
          </div>

          {/* Panah Kanan Menu - Muncul hanya jika tidak mentok kanan */}
          <button
            type="button"
            onClick={() => scrollPropertyNav("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/95 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 pb-0.5 ${
              showMenuRightArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
            aria-label="Scroll menu right"
          >
            →
          </button>
        </div>

        {/* CONTAINER UTAMA (Kotak Persegi Panjang Berdiri ke Atas) */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 md:p-6 shadow-sm space-y-5">
          {/* Info Detail Singkat Unit Rumah Terpilih */}
          <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-zinc-200/60">
            <div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
                {currentProperty?.type}
              </span>
              <h3 className="text-xl font-bold text-zinc-800 tracking-tight">{currentProperty?.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-zinc-400 uppercase block">Mulai Dari</span>
              <span className="text-lg font-extrabold text-amber-600">{currentProperty?.price}</span>
            </div>
          </div>

          {/* A. AREA GAMBAR BESAR UTAMA */}
          <div className="relative w-full h-112.5 md:h-137.5 rounded-xl overflow-hidden bg-zinc-200 border border-zinc-100">
            <Image
              src={propertyImages[activeIdx]?.src || ""}
              alt={propertyImages[activeIdx]?.alt || ""}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium tracking-wide">{propertyImages[activeIdx]?.alt}</p>
            </div>
          </div>

          {/* B. AREA THUMBNAIL DI BAWAH (Panah Melayang Sejajar Sebelah Kanan-Kiri Konten) */}
          <div className="relative group/thumb">
            {/* Panah Kiri Thumbnail */}
            <button
              type="button"
              onClick={() => scrollThumbnails("left")}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/95 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 ${
                showThumbLeftArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
              }`}
              aria-label="Scroll Left"
            >
              ←
            </button>

            {/* Baris Pembungkus Thumbnail */}
            <div
              ref={thumbnailContainerRef}
              onScroll={handleThumbScrollStatus}
              className="w-full flex gap-3 overflow-x-auto py-1 px-1 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden [ms-overflow-style:none]"
            >
              {propertyImages.map((img, idx) => (
                <button
                  aria-label={`View gallery image ${idx + 1}`}
                  type="button"
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    activeIdx === idx
                      ? "border-amber-600 ring-2 ring-amber-600/20 scale-95"
                      : "border-zinc-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>

            {/* Panah Kanan Thumbnail */}
            <button
              type="button"
              onClick={() => scrollThumbnails("right")}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/95 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 ${
                showThumbRightArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
              }`}
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>

          {/* C. KETERANGAN DESKRIPSI DINAMIS */}
          <div className="pt-4 border-t border-zinc-200 space-y-2 min-h-27.5 transition-all duration-300">
            <h4 className="text-lg font-bold text-zinc-800 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-600 rounded-full"></span>
              {propertyImages[activeIdx]?.alt}
            </h4>
            <p className="text-sm text-zinc-600 font-light leading-relaxed animate-fadeIn">
              {propertyImages[activeIdx]?.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
