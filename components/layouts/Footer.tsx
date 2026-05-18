"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sisi Kiri: Brand & Hak Cipta */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-extrabold text-lg tracking-wider text-amber-500">PRANARA CILANDAK</p>
            <p className="text-xs text-zinc-500 font-light">
              &copy; {currentYear} Pranara Land. Seluruh hak cipta dilindungi undang-undang.
            </p>
          </div>

          {/* Sisi Tengah: Navigasi Cepat (Scroll Link) */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">
              Home
            </a>
            <a href="#location" className="hover:text-amber-400 transition-colors duration-200">
              Lokasi
            </a>
            <a href="#specifications" className="hover:text-amber-400 transition-colors duration-200">
              Spesifikasi
            </a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors duration-200">
              Mengapa Kami
            </a>
          </nav>

          {/* Sisi Kanan: Kembali ke Atas Bawaan (Built-in Top Link) */}
          <div className="text-center md:text-right">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-amber-400 uppercase tracking-widest transition-colors duration-200 group"
            >
              Kembali ke Atas
              <span className="text-sm group-hover:-translate-y-0.5 transition-transform duration-200">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
