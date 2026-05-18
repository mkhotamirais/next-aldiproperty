"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Gallery() {
  // 1. Data gambar beserta nama dan deskripsi spesifik masing-masing area
  const propertyImages = [
    {
      src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg",
      alt: "Fasad Eksterior Modern",
      details:
        "Fasad bangunan mengusung konsep modern tropis dengan perpaduan material alam premium dan aksen garis tegas. Desain ini dirancang khusus untuk memaksimalkan pencahayaan alami serta memberikan impresi kemewahan yang gagah sejak pandangan pertama.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
      alt: "Interior Ruang Tamu & Keluarga",
      details:
        "Area ruang keluarga yang luas menggunakan konsep 'open plan' tanpa sekat masif, menciptakan atmosfer yang lapang dan hangat. Langit-langit yang tinggi (high ceiling) memastikan sirkulasi udara di dalam rumah tetap sejuk dan optimal sepanjang hari.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
      alt: "Tampak Depan & Carport",
      details:
        "Area depan dilengkapi dengan carport luas yang muat hingga dua mobil besar, dilapisi dengan lantai bertekstur anti-slip berkekuatan tinggi. Dilengkapi juga dengan gerbang kluster eksklusif untuk menjamin privasi dan keamanan ekstra bagi penghuni.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/00/23/architecture-1866554_1280.jpg",
      alt: "Desain Dapur Minimalis",
      details:
        "Dapur bersih (clean kitchen) dirancang dengan tata letak ergonomis yang memanfaatkan fungsionalitas ruang secara maksimal. Menggunakan material top table premium yang tahan gores dan mudah dibersihkan, cocok untuk aktivitas memasak harian keluarga.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
      alt: "Kamar Tidur Utama",
      details:
        "Master bedroom berukuran luas yang dirancang sebagai ruang istirahat personal yang menenangkan. Memiliki akses jendela besar yang menghadap langsung ke vegetasi hijau, serta dilengkapi area walk-in closet dan kamar mandi dalam yang mewah.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/03/09/23/59/villa-4917454_1280.jpg",
      alt: "Area Balkon & Santai",
      details:
        "Balkon terbuka di lantai atas berfungsi sebagai ruang komunal luar ruangan (outdoor) pribadi. Tempat yang sempurna untuk bersantai menikmati udara sore, membaca buku, atau sekadar meminum kopi bersama pasangan di akhir pekan.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailContainerRef.current) {
      const scrollAmount = 200;
      thumbnailContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Arsitektur & Estetika</span>
          <h2 className="text-3xl font-bold tracking-tight">Galeri Visual Hunian</h2>
        </div>

        {/* CONTAINER UTAMA */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 md:p-6 shadow-sm space-y-5">
          {/* A. AREA GAMBAR BESAR UTAMA */}
          <div className="relative w-full h-112.5 md:h-137.5 rounded-xl overflow-hidden bg-zinc-200 border border-zinc-100">
            <Image
              src={propertyImages[activeIdx].src}
              alt={propertyImages[activeIdx].alt}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium tracking-wide">{propertyImages[activeIdx].alt}</p>
            </div>
          </div>

          {/* B. AREA THUMBNAIL DI BAWAH DENGAN TOMBOL PANAH */}
          <div className="relative flex items-center group">
            <button
              onClick={() => scrollThumbnails("left")}
              className="absolute left-0 z-10 w-9 h-9 bg-white/90 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all -translate-x-2 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Scroll Left"
            >
              ←
            </button>

            <div
              ref={thumbnailContainerRef}
              className="w-full flex gap-3 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

            <button
              onClick={() => scrollThumbnails("right")}
              className="absolute right-0 z-10 w-9 h-9 bg-white/90 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all translate-x-2 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>

          {/* C. KETERANGAN DESKRIPSI DINAMIS (BARU) */}
          <div className="pt-4 border-t border-zinc-200 space-y-2 min-h-27.5 transition-all duration-300">
            <h3 className="text-lg font-bold text-zinc-800 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-600 rounded-full"></span>
              {propertyImages[activeIdx].alt}
            </h3>
            <p className="text-sm text-zinc-600 font-light leading-relaxed animate-fadeIn">
              {propertyImages[activeIdx].details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
