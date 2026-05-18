"use client";

export default function Specifications() {
  const specsData = [
    {
      title: "Jumlah Lantai",
      value: "3 Lantai",
      desc: "Townhouse eksklusif dengan penataan ruang vertikal yang optimal.",
    },
    {
      title: "Desain Fasad",
      value: "Modern & Elegan",
      desc: "Tampilan eksterior premium yang mencerminkan gaya hidup kontemporer.",
    },
    {
      title: "Privasi Lingkungan",
      value: "Private Unit",
      desc: "Jumlah unit sangat terbatas di dalam kluster yang tenang dan aman.",
    },
    {
      title: "Nilai Investasi",
      value: "Sangat Menjanjikan",
      desc: "Berada di kawasan prestisius dengan pertumbuhan nilai aset yang tinggi.",
    },
  ];

  return (
    <section id="specifications" className="py-24 bg-zinc-50 text-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Layout Atas: Judul di Kiri, Info Harga di Kanan */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-zinc-200">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Spesifikasi Utama</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Kualitas Bangunan Premium</h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              Setiap unit di Pranara Cilandak dibangun dengan standar material terbaik untuk memastikan kekuatan
              struktur, kenyamanan maksimal, dan estetika arsitektur yang tak lekang oleh waktu.
            </p>
          </div>

          {/* Highlight Harga (Visual Magnet) */}
          <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm min-w-70 md:text-right">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Kisaran Harga</p>
            <p className="text-3xl font-extrabold text-amber-600 tracking-tight">Rp4,7 M – Rp6 M</p>
            <p className="text-xs text-zinc-400 mt-1">Sesuai untuk hunian premium & investasi</p>
          </div>
        </div>

        {/* Layout Bawah: Grid Spesifikasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specsData.map((spec, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-xs text-zinc-400 uppercase tracking-wider mb-2">{spec.title}</p>
              <p className="text-xl font-bold text-zinc-800 mb-2 tracking-tight">{spec.value}</p>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
