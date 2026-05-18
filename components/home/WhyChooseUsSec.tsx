"use client";

export default function WhyUs() {
  const advantages = [
    {
      title: "Mobilitas Tanpa Batas",
      desc: "Kehadiran hunian ini dirancang khusus untuk memudahkan mobilitas keluarga Anda dalam beraktivitas sehari-hari tanpa perlu membuang waktu di jalan.",
    },
    {
      title: "Pilihan Ideal Profesional",
      desc: "Posisinya yang sangat dekat dengan stasiun MRT dan koridor bisnis TB Simatupang menjadikannya hunian paling strategis bagi para profesional aktif.",
    },
    {
      title: "Keseimbangan Sempurna",
      desc: "Menghadirkan perpaduan ideal antara kenyamanan lokasi premium di Jakarta Selatan, kemewahan desain modern, dan nilai investasi masa depan yang sangat menjanjikan.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Kolom Kiri: Judul Utama & Sub-teks emosional */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Investasi Terbaik untuk Keluarga Modern
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed pt-2">
              Pranara Cilandak bukan sekadar tempat tinggal biasa, melainkan sebuah aset prestisius yang merangkum gaya
              hidup dinamis, kenyamanan privasi, dan kedekatan dengan seluruh fasilitas utama Jakarta Selatan.
            </p>
          </div>

          {/* Kolom Kanan: Poin-poin Keuntungan hasil olah data narasi */}
          <div className="lg:col-span-7 space-y-8">
            {advantages.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl hover:bg-zinc-50 transition-colors duration-300">
                {/* Penomoran Elegan sebagai Pengganti Icon */}
                <div className="text-xl font-bold text-amber-600 bg-amber-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  0{index + 1}
                </div>

                {/* Detail Konten */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold text-zinc-800 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
