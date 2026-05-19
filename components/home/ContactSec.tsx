"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika pengiriman data form (misal ke API atau Email) bisa ditaruh di sini
    alert(`Terima kasih ${formData.name}, pesan Anda telah terkirim!`);
  };

  return (
    <section id="contact" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Kolom Kiri: Formulir Minat / Kontak */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                Kunjungan & Informasi
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Dapatkan Brosur & Pricelist Resmi</h2>
              <p className="text-sm text-zinc-500 font-light">
                Isi formulir di bawah ini. Konsultan properti kami dari Pranara Land akan segera menghubungi Anda untuk
                memberikan detail unit, ketersediaan, dan jadwal survei lokasi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  placeholder="Contoh: Budi Santoso"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    placeholder="budi@email.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    placeholder="081234567xxx"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none"
                  placeholder="Saya tertarik dengan tipe unit..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm rounded-lg transition-colors shadow-md shadow-amber-700/10"
              >
                Kirim Formulir
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Detail Informasi Kontak Langsung */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-zinc-800">Kontak Langsung</h3>

              {/* Opsi WhatsApp */}
              <div className="space-y-2">
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Respon Cepat via WhatsApp</p>
                <a
                  href="https://wa.me/6281234567890" // Ganti dengan nomor asli sales client nanti
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
                >
                  {/* Icon WhatsApp sederhana */}
                  <span className="text-lg">💬</span> Chat dengan Sales Kami
                </a>
              </div>

              {/* Developer Info */}
              <div className="space-y-1 pt-4 border-t border-zinc-200">
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Kantor Pemasaran</p>
                <p className="text-sm font-semibold text-zinc-800">Pranara Land Developer</p>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  Kawasan Cilandak, Kota Jakarta Selatan, <br />
                  Daerah Khusus Ibukota Jakarta.
                </p>
              </div>
            </div>

            {/* Catatan Legalitas Kecil di bagian paling bawah */}
            <div className="text-xs text-zinc-400 font-light leading-relaxed">
              <p>© 2026 Pranara Land. Seluruh hak cipta dilindungi undang-undang.</p>
              <p className="mt-1">
                Materi pemasaran ini dibuat berdasarkan data resmi tahap awal proyek Pranara Cilandak. Ilustrasi,
                spesifikasi, dan harga dapat berubah sewaktu-waktu sesuai kebijakan pengembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
