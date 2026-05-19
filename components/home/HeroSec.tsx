import { imageUrls } from "@/lib/common";
import Image from "next/image";

const heroImage = imageUrls.hero;

export default function HeroSec() {
  return (
    <section className="py-10 md:py-0 relative w-full h-auto md:h-screen overflow-hidden flex items-center">
      <Image
        src={heroImage}
        alt="Pranara Cilandak Townhouse"
        priority
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />

      {/* 2. Layer Gradasi Hitam (Overlay untuk Navbar & Kontras Teks) */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/45 to-black/70 -z-10" /> */}

      {/* 2. Layer Gradasi Radial (Terang di kanan, gelap di sekitarnya) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.7)_80%)] -z-10" />

      {/* 3. Konten Utama Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-white mt-16">
        <div className="max-w-3xl space-y-4">
          {/* Tagline / Kategori */}
          <span className="inline-block px-4 py-1.5 bg-amber-600 text-xs font-semibold tracking-widest uppercase rounded-full">
            Exclusive Townhouse
          </span>

          {/* Judul Utama */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Pranara Cilandak</h1>

          {/* Deskripsi Singkat */}
          <p className="text-lg md:text-xl text-gray-200 font-light">
            Hunian eksklusif 3 lantai yang dirancang untuk keluarga modern. Perpaduan sempurna antara privasi, kualitas
            bangunan premium, dan akses strategis di kawasan prestisius Jakarta Selatan.
          </p>

          {/* Info Singkat Harga & Lokasi */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Harga Mulai</p>
              <p className="text-xl font-bold text-amber-400">Rp4,7 Miliar</p>
            </div>
            <div className="w-px bg-white/20 hidden sm:block"></div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Lokasi</p>
              <p className="text-xl font-semibold">Cilandak, Jakarta Selatan</p>
            </div>
            <div className="w-px bg-white/20 hidden sm:block"></div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Developer</p>
              <p className="text-xl font-semibold">Pranara Land</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#gallery" className="btn-primary">
              Jelajahi Unit Hunian
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
