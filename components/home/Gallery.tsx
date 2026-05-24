"use client";

import { projectsData } from "@/data/properties";
import PropertyRow from "../PropertyRow";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER SECTION */}
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 block">
            Koleksi Hunian Premium
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-zinc-900">
            Rekomendasi Hunian Terbaik di Jakarta Selatan
          </h2>
          <p className="text-sm text-zinc-500 font-normal leading-relaxed">
            Daftar lengkap hunian eksklusif siap huni dengan konsep arsitektur premium, refined, dan timeless di lokasi
            paling strategis Jakarta Selatan.
          </p>
        </div>

        {/* DAFTAR 4 RUMAH MEMANJANG KE BAWAH (LIST STYLE) */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, index) => (
            <PropertyRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
