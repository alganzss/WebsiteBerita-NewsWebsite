export interface RegionalNews {
  id: string;
  region: string;
  image: string;
  title: string;
  description: string;
  timestamp: string;
  content: string;
  author: string;
}

export const regionalNewsData: RegionalNews[] = [
  // DKI Jakarta
  {
    id: 'reg-1',
    region: 'DKI Jakarta',
    image: 'https://images.unsplash.com/photo-1770345742900-63aa2c6d3e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'MRT Jakarta Fase 2 Resmi Beroperasi, Hubungkan Jakarta Pusat ke Utara',
    description: 'Rute baru MRT Jakarta fase 2 menghubungkan Bundaran HI hingga Kota Tua, memudahkan mobilitas warga Jakarta.',
    timestamp: '1 jam yang lalu',
    author: 'Andi Wijaya',
    content: 'Jakarta - MRT Jakarta fase 2 resmi beroperasi hari ini, menghubungkan stasiun Bundaran HI hingga Kota Tua. Proyek yang memakan waktu 3 tahun ini diharapkan dapat mengurangi kemacetan di Jakarta Pusat. Gubernur DKI Jakarta hadir dalam peresmian dan mencoba langsung naik MRT dari Bundaran HI ke Kota. "Ini adalah pencapaian besar untuk transportasi Jakarta," ujarnya.',
  },
  {
    id: 'reg-2',
    region: 'DKI Jakarta',
    image: 'https://images.unsplash.com/photo-1741653097040-c6a31cf61061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Banjir Surut di Jakarta Selatan, Warga Mulai Bersih-Bersih',
    description: 'Setelah hujan deras kemarin, banjir di beberapa titik Jakarta Selatan mulai surut pagi ini.',
    timestamp: '2 jam yang lalu',
    author: 'Siti Nurhaliza',
    content: 'Jakarta - Banjir yang merendam beberapa wilayah Jakarta Selatan sejak kemarin sore mulai surut pagi ini. Warga mulai membersihkan rumah dan lingkungan mereka. Pemprov DKI Jakarta mengerahkan pompa air dan petugas untuk mempercepat penyedotan air.',
  },

  // Jawa Barat
  {
    id: 'reg-3',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1629137780355-57d6f4aeac0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Festival Budaya Sunda di Bandung Hadirkan 100 Seniman Lokal',
    description: 'Festival budaya Sunda terbesar tahun ini digelar di Gedung Sate Bandung dengan berbagai pertunjukan seni tradisional.',
    timestamp: '3 jam yang lalu',
    author: 'Dedi Mulyadi',
    content: 'Bandung - Festival Budaya Sunda 2026 resmi dibuka di Gedung Sate, Bandung. Acara ini menampilkan 100 seniman dari seluruh Jawa Barat yang membawakan berbagai seni tradisional seperti angklung, wayang golek, dan tari jaipong. Gubernur Jawa Barat membuka acara dengan menyaksikan pertunjukan angklung oleh ratusan anak sekolah.',
  },
  {
    id: 'reg-4',
    region: 'Jawa Barat',
    image: 'https://images.unsplash.com/photo-1761114611865-7a5b6fcfee8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Tol Cisumdawu Dibuka, Perjalanan Bandung-Cirebon Hanya 2 Jam',
    description: 'Jalan tol Cisumdawu resmi beroperasi penuh, memangkas waktu tempuh Bandung-Cirebon dari 5 jam menjadi 2 jam.',
    timestamp: '4 jam yang lalu',
    author: 'Rahmat Hidayat',
    content: 'Cirebon - Jalan Tol Cirebon-Sumedang-Dawuan (Cisumdawu) sepanjang 117 km resmi beroperasi penuh. Tol ini memangkas waktu perjalanan dari Bandung ke Cirebon yang sebelumnya 5 jam menjadi hanya 2 jam. Presiden meresmikan tol ini secara virtual dari Istana Negara.',
  },

  // Jawa Tengah
  {
    id: 'reg-5',
    region: 'Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Candi Borobudur Raih Penghargaan UNESCO untuk Konservasi Terbaik',
    description: 'UNESCO memberikan penghargaan kepada Indonesia atas upaya konservasi Candi Borobudur yang sangat baik.',
    timestamp: '2 jam yang lalu',
    author: 'Bambang Susilo',
    content: 'Magelang - Candi Borobudur mendapat penghargaan dari UNESCO untuk kategori konservasi warisan dunia terbaik di Asia. Penghargaan ini diberikan atas upaya pemerintah Indonesia dalam menjaga dan merawat candi Buddha terbesar di dunia ini. Menteri Pariwisata menerima penghargaan di Paris, Prancis.',
  },
  {
    id: 'reg-6',
    region: 'Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1611812302630-8f2901a158a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Semarang Luncurkan Bus Listrik untuk Transportasi Publik',
    description: 'Pemerintah Kota Semarang meluncurkan 50 unit bus listrik ramah lingkungan untuk angkutan umum.',
    timestamp: '5 jam yang lalu',
    author: 'Sri Mulyani',
    content: 'Semarang - Walikota Semarang meresmikan pengoperasian 50 unit bus listrik untuk transportasi umum kota. Bus ramah lingkungan ini akan beroperasi di 5 koridor utama Semarang dengan tarif terjangkau Rp 3.500 per perjalanan. Ini merupakan bagian dari program Semarang Smart City.',
  },

  // Jawa Timur
  {
    id: 'reg-7',
    region: 'Jawa Timur',
    image: 'https://images.unsplash.com/photo-1741662337608-64786c428241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Pelabuhan Tanjung Perak Surabaya Jadi Pelabuhan Tersibuk di Indonesia',
    description: 'Pelabuhan Tanjung Perak mencatat rekor bongkar muat kontainer tertinggi dengan 8 juta TEUs per tahun.',
    timestamp: '1 jam yang lalu',
    author: 'Agus Wahyudi',
    content: 'Surabaya - Pelabuhan Tanjung Perak Surabaya kembali mencatat rekor sebagai pelabuhan tersibuk di Indonesia dengan bongkar muat mencapai 8 juta TEUs per tahun. Direktur Pelindo III mengatakan peningkatan ini didorong oleh ekspor komoditas Jawa Timur dan efisiensi operasional pelabuhan.',
  },
  {
    id: 'reg-8',
    region: 'Jawa Timur',
    image: 'https://images.unsplash.com/photo-1611812694205-118977f6e5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Persebaya Surabaya Juara Liga 1 Indonesia',
    description: 'Persebaya Surabaya berhasil menjuarai Liga 1 Indonesia setelah mengalahkan Persija Jakarta 3-1.',
    timestamp: '3 jam yang lalu',
    author: 'Dwi Cahyo',
    content: 'Surabaya - Persebaya Surabaya resmi menjadi juara Liga 1 Indonesia 2026 setelah mengalahkan Persija Jakarta 3-1 di Stadion Gelora Bung Tomo. Ribuan Bonek (pendukung Persebaya) merayakan kemenangan dengan konvoi keliling kota. Ini adalah gelar juara ketiga Persebaya di era Liga 1.',
  },

  // Bali
  {
    id: 'reg-9',
    region: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Bali Sambut 1 Juta Turis Asing di Bulan April',
    description: 'Pariwisata Bali terus pulih dengan kedatangan 1 juta wisatawan mancanegara dalam sebulan.',
    timestamp: '2 jam yang lalu',
    author: 'Made Suarjana',
    content: 'Denpasar - Dinas Pariwisata Bali mencatat kedatangan 1 juta wisatawan mancanegara di bulan April 2026. Angka ini menandakan pemulihan penuh sektor pariwisata Bali pasca pandemi. Mayoritas wisatawan berasal dari Australia, Tiongkok, dan Eropa. Gubernur Bali menyatakan optimisme untuk target 6 juta wisman tahun ini.',
  },
  {
    id: 'reg-10',
    region: 'Bali',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Upacara Nyepi di Bali Berjalan Khidmat, Seluruh Pulau Sunyi Total',
    description: 'Hari Raya Nyepi dirayakan dengan hikmat, Bali menjadi pulau paling sunyi di dunia selama 24 jam.',
    timestamp: '6 jam yang lalu',
    author: 'Ketut Arsana',
    content: 'Denpasar - Umat Hindu di Bali merayakan Hari Raya Nyepi dengan khidmat. Seluruh aktivitas di Pulau Dewata dihentikan selama 24 jam termasuk Bandara Ngurah Rai yang tidak beroperasi. Malam sebelum Nyepi, ribuan warga menggelar pawai ogoh-ogoh di berbagai desa. Pecalang bertugas menjaga keamanan dan memastikan semua warga menjalankan catur brata.',
  },

  // Sumatra Utara
  {
    id: 'reg-11',
    region: 'Sumatra Utara',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Danau Toba Masuk 10 Destinasi Wisata Terbaik Asia Versi Lonely Planet',
    description: 'Danau Toba mendapat pengakuan internasional sebagai salah satu destinasi wisata terbaik di Asia.',
    timestamp: '4 jam yang lalu',
    author: 'Robert Simbolon',
    content: 'Medan - Danau Toba resmi masuk dalam daftar 10 destinasi wisata terbaik di Asia versi Lonely Planet 2026. Danau vulkanik terbesar di Asia Tenggara ini dinilai memiliki keindahan alam yang menakjubkan dan budaya Batak yang unik. Pemerintah Sumatra Utara berkomitmen meningkatkan infrastruktur wisata di kawasan Danau Toba.',
  },

  // Aceh
  {
    id: 'reg-12',
    region: 'Aceh',
    image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Kopi Gayo Aceh Raih Penghargaan Best Coffee di World Coffee Championship',
    description: 'Kopi Gayo dari dataran tinggi Aceh meraih juara pertama dalam kompetisi kopi dunia.',
    timestamp: '3 jam yang lalu',
    author: 'Muhammad Yusuf',
    content: 'Banda Aceh - Kopi Gayo dari Aceh Tengah berhasil meraih penghargaan Best Coffee di ajang World Coffee Championship 2026 di Melbourne, Australia. Kopi yang ditanam di ketinggian 1.200-1.500 mdpl ini mengalahkan pesaing dari Colombia dan Ethiopia. Petani kopi Gayo merayakan prestasi ini dengan syukuran bersama.',
  },

  // Sulawesi Selatan
  {
    id: 'reg-13',
    region: 'Sulawesi Selatan',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Makassar Terpilih Jadi Tuan Rumah SEA Games 2029',
    description: 'Makassar resmi ditunjuk sebagai tuan rumah pesta olahraga SEA Games 2029.',
    timestamp: '2 jam yang lalu',
    author: 'Andi Mappasessu',
    content: 'Makassar - Olympic Council of Asia resmi menunjuk Makassar sebagai tuan rumah SEA Games 2029. Keputusan ini diumumkan dalam sidang di Bangkok, Thailand. Pemerintah Sulawesi Selatan akan membangun berbagai venue olahraga baru dan merenovasi stadion yang ada untuk menyambut atlet dari negara-negara Asia Tenggara.',
  },

  // Kalimantan Timur
  {
    id: 'reg-14',
    region: 'Kalimantan Timur',
    image: 'https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Pembangunan Ibu Kota Nusantara Capai 60%, Target Pindah 2027',
    description: 'Proyek pembangunan Ibu Kota Nusantara (IKN) di Kalimantan Timur mencapai progres 60%.',
    timestamp: '1 jam yang lalu',
    author: 'Bambang Susanto',
    content: 'Penajam Paser Utara - Kepala Otorita IKN melaporkan progres pembangunan Ibu Kota Nusantara telah mencapai 60%. Gedung-gedung pemerintahan utama seperti Istana Presiden dan gedung DPR sudah memasuki tahap finishing. Pemerintah optimis dapat mulai memindahkan sebagian pegawai negara pada 2027.',
  },

  // Papua
  {
    id: 'reg-15',
    region: 'Papua',
    image: 'https://images.unsplash.com/photo-1566995541428-b5c8b1c1e4c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Taman Nasional Lorentz Papua Masuk Situs Warisan Dunia UNESCO',
    description: 'UNESCO resmi memasukkan Taman Nasional Lorentz sebagai Situs Warisan Dunia.',
    timestamp: '5 jam yang lalu',
    author: 'Yohanes Wenda',
    content: 'Jayapura - Taman Nasional Lorentz yang merupakan kawasan konservasi terbesar di Asia Tenggara resmi masuk daftar Situs Warisan Dunia UNESCO. Taman nasional seluas 2,4 juta hektare ini memiliki ekosistem lengkap dari pantai hingga gletser. Gubernur Papua menyambut baik pengakuan ini dan berkomitmen menjaga kelestarian alam Papua.',
  },
];

export const getNewsByRegion = (region: string): RegionalNews[] => {
  const normalizedRegion = region.toLowerCase().replace(/-/g, ' ');
  return regionalNewsData.filter(
    news => news.region.toLowerCase() === normalizedRegion
  );
};

export const getAllRegions = (): string[] => {
  const regions = new Set(regionalNewsData.map(news => news.region));
  return Array.from(regions).sort();
};
