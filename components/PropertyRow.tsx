"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ProjectData } from "@/data/properties";

interface PropertyRowProps {
  project: ProjectData;
  index: number;
}

export default function PropertyRow({ project, index }: PropertyRowProps) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [showThumbLeftArrow, setShowThumbLeftArrow] = useState(false);
  const [showThumbRightArrow, setShowThumbRightArrow] = useState(false);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const projectImages = project.images || [];

  const isEven = index % 2 === 1;

  const handleThumbScrollStatus = () => {
    if (thumbnailContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = thumbnailContainerRef.current;
      setShowThumbLeftArrow(scrollLeft > 5);
      setShowThumbRightArrow(scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({
        left: direction === "left" ? -180 : 180,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (projectImages.length > 0) {
      handleThumbScrollStatus();
      window.addEventListener("resize", handleThumbScrollStatus);
    }
    return () => window.removeEventListener("resize", handleThumbScrollStatus);
  }, [projectImages.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-12 border-b border-zinc-100 last:border-b-0">
      {/* BLOK A: JUDUL & HARGA */}
      <div className={`order-1 lg:col-span-5 space-y-1.5 ${isEven ? "lg:order-last" : "lg:order-first"}`}>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">Hunian 0{index + 1}</span>
        <h3 className="text-2xl font-bold text-zinc-900 tracking-tight md:text-3xl">{project.name}</h3>
        <p className="text-lg font-extrabold text-amber-600 pt-0.5">{project.priceRange}</p>

        <div className="hidden lg:block space-y-4 pt-4">
          <div className="space-y-3 text-zinc-600 font-light text-sm leading-relaxed border-l-2 border-zinc-200 pl-4 py-0.5">
            {project.descriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
          <div className="pt-2 space-y-3">
            <div className="max-w-md">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Alamat Lokasi</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{project.address}</p>
            </div>
            <a
              href={project.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider bg-amber-50 hover:bg-amber-100/70 px-4 py-2.5 rounded-lg"
            >
              📍 Petunjuk Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* BLOK B: GALERI VISUAL / PLACEHOLDER NO IMAGE */}
      <div
        className={`order-2 lg:col-span-7 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 md:p-5 shadow-xs ${
          isEven ? "lg:order-first" : "lg:order-last"
        }`}
      >
        {projectImages.length === 0 ? (
          /* TAMPILAN NO IMAGE PREMIUM JIKA DATA GAMBAR KOSONG */
          <div className="w-full h-72 md:h-96 rounded-xl bg-zinc-100/80 border border-zinc-200/60 border-dashed flex flex-col items-center justify-center text-center p-6 space-y-3 select-none">
            <div className="w-14 h-14 bg-zinc-200 text-zinc-400 rounded-full flex items-center justify-center shadow-xs">
              {/* SVG Icon Outline Rumah dengan Silang Merujuk pada No-Image */}
              <svg
                className="w-7 h-7 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
                <line x1="2" y1="2" x2="22" y2="22" className="stroke-zinc-300 stroke-[2.5px]" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-zinc-500">Galeri Foto Belum Tersedia</p>
              <p className="text-xs text-zinc-400 font-light max-w-xs">
                Dokumentasi visual unit sedang dalam proses pembaruan oleh tim agensi kami.
              </p>
            </div>
          </div>
        ) : (
          /* TAMPILAN GALERI ASLI JIKA DATA GAMBAR ADA */
          <div className="space-y-4">
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden bg-zinc-200 border border-zinc-100">
              <Image
                src={projectImages[activeImgIdx]?.src || ""}
                alt={projectImages[activeImgIdx]?.alt || ""}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-xs font-medium tracking-wide">{projectImages[activeImgIdx]?.alt}</p>
              </div>
            </div>

            <div className="relative group/thumb">
              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/95 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 ${
                  showThumbLeftArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
                aria-label="Scroll Left"
              >
                ←
              </button>

              <div
                ref={thumbnailContainerRef}
                onScroll={handleThumbScrollStatus}
                className="w-full flex gap-2.5 overflow-x-auto py-1 px-1 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden [ms-overflow-style:none]"
              >
                {projectImages.map((img, idx) => (
                  <button
                    aria-label={`View image ${idx + 1}`}
                    type="button"
                    key={idx}
                    onClick={() => setActiveImgIdx(idx)}
                    className={`relative w-18 h-12 md:w-24 md:h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImgIdx === idx
                        ? "border-amber-600 ring-2 ring-amber-600/20 scale-95"
                        : "border-zinc-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/95 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 ${
                  showThumbRightArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
                aria-label="Scroll Right"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* BLOK C: DESKRIPSI & ALAMAT MOBILE */}
      <div className="order-3 lg:hidden space-y-4">
        <div className="space-y-3 text-zinc-600 font-light text-sm leading-relaxed border-l-2 border-zinc-200 pl-4 py-0.5">
          {project.descriptions.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
        <div className="pt-2 space-y-3">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Alamat Lokasi</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">{project.address}</p>
          </div>
          <a
            href={project.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider bg-amber-50 hover:bg-amber-100/70 px-4 py-2.5 rounded-lg w-full justify-center"
          >
            📍 Petunjuk Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
