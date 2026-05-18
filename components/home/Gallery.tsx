"use client";

import Image from "next/image";
import CardGallery from "../CardGallery";

export default function Gallery() {
  // Menggunakan URL gambar arsitektur/interior modern dari Pixabay
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg",
      alt: "Fasad Modern Eksterior Pranara Cilandak",
      size: "md:col-span-2 h-[400px]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
      alt: "Desain Interior Ruang Tamu Premium",
      size: "md:col-span-1 h-[400px]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
      alt: "Suasana Area Hunian Eksklusif",
      size: "md:col-span-3 h-[500px]",
    },
  ];

  return (
    <>
      <CardGallery />
      <section id="gallery" className="py-24 bg-white text-zinc-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Arsitektur & Estetika
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Galeri Visual Hunian</h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              Intip setiap sudut kemewahan Pranara Cilandak. Desain fasad modern berpadu sempurna dengan tata ruang
              interior yang luas, menghadirkan atmosfer hangat bagi keluarga Anda.
            </p>
          </div>

          {/* Bento Grid Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-sm group border border-zinc-100 ${img.size}`}
              >
                {/* Next.js Image Component dengan URL Pixabay */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-w-7xl) 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized // Mencegah error optimasi Next.js untuk aset remote sementara
                />

                {/* Overlay Efek Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
