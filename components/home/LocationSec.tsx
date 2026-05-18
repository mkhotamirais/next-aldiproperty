"use client";

export default function Location() {
  const accessibilityData = [
    {
      distance: "3 KM",
      target: "Stasiun MRT Jakarta Fatmawati",
      desc: "Akses cepat dan bebas macet langsung menuju pusat bisnis utama Jakarta.",
    },
    {
      distance: "4 KM",
      target: "CBD TB Simatupang",
      desc: "Sangat dekat dengan berbagai gedung perkantoran korporat dan pusat bisnis.",
    },
    {
      distance: "7 KM",
      target: "Pondok Indah Mall (PIM)",
      desc: "Kemudahan akses ke pusat perbelanjaan premium, kuliner, dan hiburan kelas atas.",
    },
  ];

  return (
    <section id="location" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Konektivitas Strategis</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Lokasi Prima di Jakarta Selatan
          </h2>
          <p className="text-zinc-600 font-light leading-relaxed">
            Pranara Cilandak menawarkan aksesibilitas yang tak tertandingi, menghubungkan keluarga Anda secara mulus ke
            pusat perbelanjaan premium, sekolah internasional, kawasan bisnis utama, dan fasilitas kesehatan ternama.
          </p>
        </div>

        {/* Grid Card Jarak / Aksesbilitas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessibilityData.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-amber-500/60 hover:shadow-md transition-all duration-300 group"
            >
              {/* Jarak (Angka Besar) */}
              <div className="text-4xl font-extrabold text-amber-600 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                {item.distance}
              </div>

              {/* Tujuan Akses */}
              <h3 className="text-lg font-semibold text-zinc-800 mb-3">ke {item.target}</h3>

              {/* Deskripsi */}
              <p className="text-sm text-zinc-600 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Info Box Penutup */}
        <div className="mt-12 p-6 bg-amber-50 border border-amber-200/60 rounded-xl text-center">
          <p className="text-sm text-amber-800 font-light">
            Solusi mobilitas harian yang ideal, dirancang khusus untuk para profesional modern dan keluarga berkembang.
          </p>
        </div>
      </div>
    </section>
  );
}
