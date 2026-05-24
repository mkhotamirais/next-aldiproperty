export interface PropertyImage {
  src: string;
  alt: string;
  details: string;
}

export interface ProjectData {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  priceRange: string;
  descriptions: string[];
  images: PropertyImage[];
}

export const projectsData: ProjectData[] = [
  {
    id: "pranara-cilandak",
    name: "Pranara Cilandak",
    address:
      "Jl. Margasatwa Raya No.18, RT.9/RW.2, Pd. Labu, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12450",
    mapsUrl: "https://maps.app.goo.gl/FjpxiVSuztq1gfSw5?g_st=ac",
    priceRange: "Rp 4,7M - 6M",
    descriptions: [
      "Pranara Cilandak menghadirkan 17 hunian eksklusif di kawasan premium Jakarta Selatan.",
      "Dekat Pondok Indah, TB Simatupang, dan berbagai lifestyle destination pilihan.",
      "Lingkungan yang tenang dan private menghadirkan kenyamanan yang terasa lebih personal.",
      "Dirancang dengan karakter yang refined, hangat, dan timeless dalam setiap detailnya.",
      "Sebuah alamat yang merepresentasikan hidup modern dengan cara yang lebih elegan.",
    ],
    images: [
      {
        src: "/images/pranara-cilandak-1.jpeg",
        alt: "Ruang Utama Pranara",
        details: "Desain eksterior refined dengan karakter hangat nan timeless.",
      },
      {
        src: "/images/pranara-cilandak-2.jpeg",
        alt: "Ruang Keluarga Premium",
        details: "Interior lapang dengan bukaan kaca besar untuk pencahayaan alami.",
      },
      {
        src: "/images/pranara-cilandak-3.jpeg",
        alt: "Master Bedroom",
        details: "Kamar tidur utama yang private, dirancang untuk kenyamanan personal.",
      },
    ],
  },
  {
    id: "nivara-wijaya",
    name: "Nivara Resort Wijaya",
    address:
      "Jl. Wijaya Timur Raya No.7, RT.15/RW.2, Kuningan Bar., Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12170",
    mapsUrl: "https://maps.app.goo.gl/66RoSdWxXNuofVNH6?g_st=ac",
    priceRange: "Rp 7M - 8,4M",
    descriptions: [
      "Nivara Resort Townhouse Wijaya menghadirkan hunian premium eksklusif di Jakarta Selatan.",
      "Hanya tersedia 18 unit dengan konsep resort living modern.",
      "Setiap rumah dilengkapi private elevator dan desain indoor-outdoor yang elegan.",
      "Fasilitas premium seperti jacuzzi, sauna, gym, dan pool access menunjang kenyamanan penghuni.",
      "Lokasinya strategis, dekat SCBD, Mega Kuningan, dan pusat lifestyle Jakarta Selatan.",
    ],
    images: [
      {
        src: "/images/nivara-resort-1.jpeg",
        alt: "Fasad Resort Living",
        details: "Eksterior bernuansa resort mewah di tengah jantung kota Jakarta Selatan.",
      },
      {
        src: "/images/nivara-resort-2.jpeg",
        alt: "Private Elevator Area",
        details: "Akses lift pribadi yang memberikan kemudahan mobilitas antar lantai.",
      },
      {
        src: "/images/nivara-resort-3.jpeg",
        alt: "Fasilitas Kolam Renang",
        details: "Pool access langsung yang memberikan kesegaran ala resort bintang lima.",
      },
    ],
  },
  {
    id: "north-kemang",
    name: "North Kemang Huis",
    address:
      "Jl. Kemang Utara No.32, RT.1/RW.5, Bangka, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta 12730",
    mapsUrl: "https://maps.app.goo.gl/iv2azuX8GXduho148",
    priceRange: "Rp 6M - 10M",
    descriptions: [
      "North Kemang Huis menghadirkan keseimbangan antara konektivitas kota dan kenyamanan tinggal yang lebih private di kawasan Kemang.",
      "Berlokasi strategis dengan akses cepat menuju SCBD, Kuningan, Sudirman, dan TB Simatupang.",
      "Hunian ini dirancang untuk gaya hidup urban yang dinamis tanpa kehilangan ketenangan saat kembali ke rumah.",
      "Dengan karakter desain yang refined dan suasana yang intimate, North Kemang Huis menjadi pilihan ideal bagi mereka yang mencari kenyamanan modern di salah satu area paling desirable di Jakarta Selatan.",
    ],
    images: [
      {
        src: "/images/north-kemang-huis-1.jpeg",
        alt: "Arsitektur Refined Kemang",
        details: "Desain arsitektur modern kontemporer yang menyatu dengan keasrian Kemang.",
      },
      {
        src: "/images/north-kemang-huis-2.jpeg",
        alt: "Intimate Living Space",
        details: "Tata ruang keluarga yang hangat, sempurna untuk gaya hidup urban.",
      },
    ],
  },
  {
    id: "umala-homes",
    name: "Umala Homes",
    address:
      "Jl. Senopati No.45, RT.6/RW.3, Selong, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110",
    mapsUrl: "https://maps.google.com",
    priceRange: "Rp 12M - 15M",
    descriptions: [
      "Umala Homes mendefinisikan ulang kemewahan urban di lokasi paling bergengsi Kebayoran Baru.",
      "Menyajikan 10 unit terbatas bergaya arsitektur klasik modern dengan sentuhan interior Eropa oriental.",
      "Dilengkapi dengan sistem Smart Home bersertifikasi internasional dan keamanan berlapis 24 jam.",
      "Sangat cocok bagi para profesional papan atas yang mendambakan gengsi, privasi penuh, dan aksesibilitas tanpa batas ke SCBD.",
    ],
    images: [
      {
        src: "/images/umala-homes-1.jpeg",
        alt: "Fasad Klasik Modern",
        details: "Desain arsitektur klasik modern dengan sentuhan interior Eropa oriental.",
      },
      {
        src: "/images/umala-homes-2.jpeg",
        alt: "Interior Mewah",
        details: "Interior mewah dengan sistem Smart Home bersertifikasi internasional.",
      },
    ],
  },
];
