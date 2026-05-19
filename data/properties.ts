export interface PropertyImage {
  src: string;
  alt: string;
  details: string;
}

export interface Property {
  id: string;
  name: string;
  type: string;
  price: string;
  images: PropertyImage[];
}

export const propertiesData: Property[] = [
  {
    id: "unit-01",
    name: "Pranara Cilandak - Tipe A",
    type: "Corner Unit (Hook)",
    price: "Rp 6,0 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg",
        alt: "Fasad Eksterior Tipe A",
        details:
          "Fasad unit hook dengan area taman samping yang lebih luas dan eksposur cahaya maksimal dari dua sisi bangunan.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
        alt: "Interior Ruang Tamu Tipe A",
        details:
          "Ruang tamu utama dengan luas maksimal, dirancang untuk menyambut kolega dengan impresi kemewahan modern.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
        alt: "Tampak Samping & Carport",
        details:
          "Area carport yang terintegrasi langsung dengan akses halaman samping, memudahkan aktivitas luar ruangan keluarga.",
      },
    ],
  },
  {
    id: "unit-02",
    name: "Pranara Cilandak - Tipe B",
    type: "Standard Unit",
    price: "Rp 4,7 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
        alt: "Tampak Depan Tipe B",
        details:
          "Desain simetris minimalis yang efisien namun tetap mempertahankan ruang carport untuk dua mobil besar secara fungsional.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/00/23/architecture-1866554_1280.jpg",
        alt: "Dapur Minimalis Tipe B",
        details: "Dapur bersih dengan konsep minimalis fungsional yang terhubung langsung ke ruang makan utama.",
      },
    ],
  },
  {
    id: "unit-03",
    name: "Pranara Premium - Tipe C",
    type: "Deluxe Executive",
    price: "Rp 5,2 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2017/06/05/19/05/house-2374925_1280.jpg",
        alt: "Fasad Kontemporer Tipe C",
        details:
          "Fasad mewah bertekstur batu alam dengan dominasi kaca besar untuk menciptakan sirkulasi udara yang menyegarkan.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
        alt: "Dapur & Island Table Tipe C",
        details: "Area memasak yang luas dilengkapi dengan meja pulau (island table) marmer bergaya urban minimalis.",
      },
    ],
  },
  {
    id: "unit-04",
    name: "Pranara Signature - Tipe D",
    type: "Premium Courtyard",
    price: "Rp 5,8 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/00/23/architecture-1866554_1280.jpg",
        alt: "Fasad Simetris Tipe D",
        details:
          "Arsitektur modern simetris yang menekankan aspek privasi tinggi dengan penataan taman dalam (inner courtyard).",
      },
      {
        src: "https://cdn.pixabay.com/photo/2020/03/09/23/59/villa-4917454_1280.jpg",
        alt: "Balkon Atas Tipe D",
        details:
          "Balkon semi-terbuka di lantai tiga yang ideal sebagai tempat bersantai privat sambil menikmati langit malam perkotaan.",
      },
    ],
  },
  {
    id: "unit-05",
    name: "The Pranara Suite - Tipe E",
    type: "Grand Master Suite",
    price: "Rp 5,5 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
        alt: "Tampak Eksklusif Lantai Bawah",
        details:
          "Tata ruang lantai dasar yang memaksimalkan area komunal tanpa dinding pembatas, menciptakan kesan ruang yang tak terbatas.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
        alt: "Master Bedroom Tipe E",
        details:
          "Kamar tidur utama super luas dengan pencahayaan dramatis, dilengkapi ruang pakaian khusus (walk-in closet).",
      },
    ],
  },
  {
    id: "unit-06",
    name: "Pranara Residence - Tipe F",
    type: "Urban Smart Home",
    price: "Rp 4,9 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2020/03/09/23/59/villa-4917454_1280.jpg",
        alt: "Eksterior Minimalis Tipe F",
        details:
          "Unit modern yang dirancang untuk keluarga muda, mengintegrasikan sistem rumah pintar (smart home) di setiap sudut.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
        alt: "Ruang Kerja Privat Tipe F",
        details:
          "Sudut ruangan lantai dua yang dialokasikan khusus sebagai ruang kerja atau ruang belajar tenang yang fungsional.",
      },
    ],
  },
  {
    id: "unit-07",
    name: "Pranara Villa - Tipe G",
    type: "Tropical Resort Unit",
    price: "Rp 5,9 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg",
        alt: "Fasad Bernuansa Resort",
        details:
          "Mengadopsi arsitektur vila tropis dengan sirkulasi udara silang (cross ventilation) yang membuat rumah selalu sejuk.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/06/05/19/05/house-2374925_1280.jpg",
        alt: "Ruang Makan Terbuka Tipe G",
        details:
          "Area makan eksklusif yang menghadap langsung ke kolam ikan mini atau taman vertikal di area belakang.",
      },
    ],
  },
  {
    id: "unit-08",
    name: "Pranara Heritage - Tipe H",
    type: "Classic Modern Loft",
    price: "Rp 5,1 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
        alt: "Tampak Depan Neo-Klasik",
        details:
          "Perpaduan menawan antara garis arsitektur klasik yang kokoh dengan fungsionalitas tata ruang modern abad 21.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
        alt: "Ruang Keluarga Lantai Mezzanine",
        details: "Pemanfaatan struktur langit-langit tinggi menjadi ruang mezzanine serbaguna untuk area bermain anak.",
      },
    ],
  },
  {
    id: "unit-09",
    name: "Pranara Vista - Tipe I",
    type: "Skyline View Unit",
    price: "Rp 5,3 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2017/06/05/19/05/house-2374925_1280.jpg",
        alt: "Fasad Kaca Transparan Tipe I",
        details:
          "Penggunaan panel kaca struktural setinggi penuh yang memberikan pemandangan lepas ke arah lanskap kota.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2020/03/09/23/59/villa-4917454_1280.jpg",
        alt: "Area Santai Rooftop Tipe I",
        details:
          "Sudut bersantai komunal di area teratas bangunan, dirancang untuk menikmati matahari terbenam kota Jakarta.",
      },
    ],
  },
  {
    id: "unit-10",
    name: "Pranara Sanctuary - Tipe J",
    type: "Ultimate Private Cluster",
    price: "Rp 6,5 Miliar",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg",
        alt: "Fasad Terbesar Tipe Paling Mewah",
        details:
          "Koleksi unit terbesar dan paling privat di Pranara Cilandak, menawarkan spesifikasi material tertinggi di kelasnya.",
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
        alt: "Dapur Kering & Wet Kitchen Tipe J",
        details:
          "Fasilitas dapur ganda super lengkap dengan kelengkapan kabinet kustom (custom cabinetry) standar internasional.",
      },
    ],
  },
];
