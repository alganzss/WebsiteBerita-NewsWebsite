export interface NewsArticle {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  timestamp: string;
  content: string;
  author: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1770345742900-63aa2c6d3e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRvbmVzaWFuJTIwY3VsdHVyZSUyMGpha2FydGF8ZW58MXx8fHwxNzc3MDQ5MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Berita Utama',
    title: 'Ribuan Warga Memadati Gedung Bersejarah di Jakarta untuk Perayaan Kemerdekaan',
    description: 'Perayaan kemerdekaan Indonesia tahun ini dihadiri ribuan warga yang berkumpul di depan gedung bersejarah. Acara berlangsung meriah dengan berbagai pertunjukan budaya dan upacara pengibaran bendera.',
    timestamp: '2 jam yang lalu',
    author: 'Ahmad Fauzi',
    content: `Jakarta - Ribuan warga memadati area sekitar gedung bersejarah di Jakarta untuk merayakan hari kemerdekaan Indonesia. Acara yang dimulai sejak pukul 08.00 WIB ini dihadiri oleh berbagai kalangan, mulai dari anak-anak hingga orang tua.

Perayaan kali ini menampilkan berbagai pertunjukan budaya tradisional dari seluruh Nusantara. Penonton dapat menyaksikan tarian dari Bali, Jawa, Sumatra, dan Papua yang ditampilkan secara bergantian di panggung utama.

"Ini adalah momen yang sangat bersejarah. Kami senang bisa berkumpul bersama untuk merayakan kemerdekaan negara tercinta," ujar salah satu peserta, Ibu Siti Aminah (45), warga Jakarta Pusat.

Selain pertunjukan budaya, acara ini juga diisi dengan upacara pengibaran bendera Merah Putih yang dipimpin oleh Gubernur DKI Jakarta. Upacara berlangsung khidmat dan diikuti oleh seluruh peserta yang hadir.

Panitia telah menyiapkan berbagai fasilitas untuk kenyamanan pengunjung, termasuk pos kesehatan, area istirahat, dan stand makanan tradisional. Polisi dan petugas keamanan juga dikerahkan untuk menjaga ketertiban selama acara berlangsung.

Acara perayaan kemerdekaan ini akan berlangsung hingga malam hari, ditutup dengan pertunjukan kembang api yang spektakuler. Panitia memperkirakan total pengunjung akan mencapai lebih dari 10.000 orang.`,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1741662337608-64786c428241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Finansial',
    title: 'Pertumbuhan Ekonomi Indonesia Diprediksi Capai 5.3% di Kuartal Ketiga',
    description: 'Menteri Keuangan optimis pertumbuhan ekonomi Indonesia akan terus meningkat didorong oleh konsumsi domestik dan investasi yang kuat.',
    timestamp: '30 menit yang lalu',
    author: 'Dewi Sartika',
    content: `Jakarta - Pemerintah Indonesia memprediksi pertumbuhan ekonomi nasional akan mencapai 5.3% di kuartal ketiga tahun ini. Angka ini menunjukkan peningkatan dibandingkan kuartal sebelumnya yang mencatat pertumbuhan 5.1%.

Menteri Keuangan Sri Mulyani Indrawati menyatakan bahwa pertumbuhan ekonomi Indonesia didorong oleh beberapa faktor utama, termasuk konsumsi rumah tangga yang kuat, investasi yang meningkat, dan ekspor yang tetap solid.

"Konsumsi domestik masih menjadi motor utama pertumbuhan ekonomi kita. Ditambah dengan investasi yang terus meningkat, khususnya di sektor infrastruktur dan manufaktur," jelas Sri Mulyani dalam konferensi pers di Jakarta.

Data dari Badan Pusat Statistik (BPS) menunjukkan bahwa konsumsi rumah tangga tumbuh 5.2% pada kuartal kedua, sementara investasi meningkat 6.1%. Sektor yang mencatat pertumbuhan tertinggi adalah industri pengolahan, konstruksi, dan perdagangan.

Namun, pemerintah tetap waspada terhadap berbagai tantangan, termasuk ketidakpastian ekonomi global, fluktuasi harga komoditas, dan potensi kenaikan inflasi. Bank Indonesia telah menyiapkan berbagai kebijakan moneter untuk menjaga stabilitas ekonomi.

Para ekonom memperkirakan pertumbuhan ekonomi Indonesia untuk sepanjang tahun 2026 akan berada di kisaran 5.2-5.5%, didukung oleh pemulihan ekonomi global dan kebijakan fiskal yang ekspansif.`,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1611812302630-8f2901a158a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Olahraga',
    title: 'Timnas Indonesia Raih Kemenangan 2-0 Atas Thailand dalam Laga Persahabatan',
    description: 'Tim Garuda sukses mengalahkan Thailand dengan skor telak 2-0 dalam pertandingan persahabatan yang berlangsung di Stadion Gelora Bung Karno.',
    timestamp: '1 jam yang lalu',
    author: 'Budi Santoso',
    content: `Jakarta - Tim Nasional Indonesia berhasil meraih kemenangan gemilang 2-0 atas Thailand dalam pertandingan persahabatan yang digelar di Stadion Gelora Bung Karno, Jakarta, Kamis (24/4/2026) malam.

Kemenangan ini diraih berkat gol-gol yang dicetak oleh striker muda Indonesia, Rafli Ahmad pada menit ke-23 dan winger andalan, Egy Maulana pada menit ke-67. Pertandingan berlangsung sengit dengan kedua tim menampilkan permainan yang menarik.

Pelatih Tim Nasional Indonesia, Shin Tae-yong, mengaku puas dengan penampilan anak asuhnya. "Kami bermain dengan baik malam ini. Para pemain menjalankan strategi dengan sempurna dan berhasil mengendalikan jalannya pertandingan," ujar Shin dalam konferensi pers pasca pertandingan.

Laga dimulai dengan tekanan tinggi dari kedua tim. Indonesia tampil dominan di babak pertama dengan penguasaan bola mencapai 58%. Gol pertama tercipta pada menit ke-23 melalui aksi individual Rafli Ahmad yang memanfaatkan umpan terobosan dari gelandang Marselino Ferdinan.

Di babak kedua, Thailand mencoba bangkit dengan melakukan beberapa pergantian pemain. Namun, pertahanan Indonesia yang solid berhasil membendung serangan-serangan Gajah Perang. Egy Maulana mengunci kemenangan pada menit ke-67 dengan tembakan keras dari luar kotak penalti.

Pertandingan ini merupakan bagian dari persiapan Timnas Indonesia menghadapi kualifikasi Piala Dunia 2026 zona Asia. Indonesia akan menghadapi Vietnam dalam laga kualifikasi pada bulan depan.

Sekitar 45.000 penonton memadati Stadion Gelora Bung Karno untuk memberikan dukungan kepada Tim Garuda. Suasana stadion sangat meriah dengan nyanyian dan yel-yel dari para pendukung sepanjang pertandingan.`,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Kuliner',
    title: 'Festival Makanan Tradisional Indonesia Hadirkan 200 Pedagang dari Seluruh Nusantara',
    description: 'Festival kuliner terbesar tahun ini menampilkan ragam makanan tradisional dari Sabang sampai Merauke.',
    timestamp: '1 jam yang lalu',
    author: 'Ratna Dewi',
    content: `Jakarta - Festival Makanan Tradisional Indonesia 2026 resmi dibuka hari ini di Jakarta Convention Center (JCC). Acara yang akan berlangsung selama lima hari ini menghadirkan lebih dari 200 pedagang kuliner dari berbagai daerah di Indonesia.

Festival ini menampilkan beragam makanan tradisional dari Sabang sampai Merauke, mulai dari rendang Padang, gudeg Yogyakarta, pempek Palembang, hingga papeda Papua. Pengunjung dapat menikmati dan membeli langsung berbagai kuliner khas Nusantara dalam satu lokasi.

"Ini adalah festival kuliner terbesar yang pernah kami selenggarakan. Kami ingin mengenalkan kekayaan kuliner Indonesia kepada masyarakat luas, sekaligus mendukung para pedagang kuliner tradisional," kata Direktur Festival, Ibu Ani Wijaya.

Selain bazar kuliner, festival ini juga menghadirkan berbagai acara menarik seperti cooking class dengan chef ternama, lomba memasak, dan talkshow tentang pelestarian kuliner tradisional Indonesia. Para pengunjung juga dapat menyaksikan demo memasak langsung dari berbagai chef dan juru masak tradisional.

Harga makanan di festival ini cukup terjangkau, berkisar dari Rp 10.000 hingga Rp 50.000 per porsi. Panitia juga menyediakan paket hemat bagi pengunjung yang ingin mencoba berbagai jenis makanan.

Festival Makanan Tradisional Indonesia 2026 dibuka untuk umum setiap hari pukul 10.00-22.00 WIB. Tiket masuk gratis untuk semua pengunjung. Diperkirakan festival ini akan dikunjungi lebih dari 50.000 orang selama lima hari penyelenggaraan.`,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1761114611865-7a5b6fcfee8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Berita',
    title: 'Monumen Ikonik Jakarta Jadi Lokasi Favorit Wisatawan Lokal dan Mancanegara',
    description: 'Monumen Nasional atau Monas mencatat peningkatan jumlah pengunjung hingga 30% di tahun ini.',
    timestamp: '2 jam yang lalu',
    author: 'Rudi Hermawan',
    content: `Jakarta - Monumen Nasional (Monas) kembali menjadi destinasi wisata favorit di Jakarta dengan peningkatan jumlah pengunjung yang signifikan. Data dari Dinas Pariwisata DKI Jakarta menunjukkan adanya peningkatan jumlah wisatawan hingga 30% dibandingkan tahun lalu.

Kepala Dinas Pariwisata DKI Jakarta, Pak Anwar Musadad, menjelaskan bahwa peningkatan ini didorong oleh berbagai program promosi wisata dan perbaikan fasilitas di area Monas. "Kami terus melakukan perbaikan dan peningkatan kualitas layanan untuk memberikan pengalaman terbaik bagi wisatawan," ujarnya.

Monas tidak hanya menarik wisatawan lokal, tetapi juga wisatawan mancanegara dari berbagai negara. Pengunjung dari negara-negara Asia Tenggara, Eropa, dan Amerika Serikat tercatat sebagai yang paling banyak mengunjungi ikon Jakarta ini.

Fasilitas di sekitar Monas juga terus ditingkatkan. Pemerintah Provinsi DKI Jakarta baru-baru ini meresmikan pusat informasi wisata baru yang dilengkapi dengan teknologi augmented reality (AR) untuk memberikan pengalaman interaktif kepada pengunjung.

Area di sekitar Monas juga menjadi lokasi favorit untuk berbagai kegiatan, mulai dari olahraga pagi, piknik keluarga, hingga acara-acara budaya. Setiap akhir pekan, ribuan warga Jakarta dan wisatawan memadati area ini.

Harga tiket masuk Monas saat ini adalah Rp 10.000 untuk dewasa dan Rp 5.000 untuk anak-anak. Untuk naik ke puncak Monas, pengunjung perlu membayar tambahan Rp 15.000. Monas buka setiap hari dari pukul 08.00-16.00 WIB, kecuali hari Senin.`,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1741653097040-c6a31cf61061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Finansial',
    title: 'Investasi Asing di Sektor Properti Indonesia Meningkat 15% Tahun Ini',
    description: 'Sektor properti Indonesia semakin menarik bagi investor asing dengan pertumbuhan yang konsisten.',
    timestamp: '2 jam yang lalu',
    author: 'Siti Nurhaliza',
    content: `Jakarta - Investasi asing di sektor properti Indonesia mencatat peningkatan signifikan sebesar 15% pada tahun 2026. Angka ini menunjukkan kepercayaan investor internasional terhadap prospek pasar properti tanah air.

Data dari Badan Koordinasi Penanaman Modal (BKPM) menunjukkan bahwa total investasi asing di sektor properti mencapai USD 3.2 miliar pada semester pertama tahun ini. Investasi terbesar berasal dari Singapura, Jepang, dan Korea Selatan.

"Kami melihat minat yang sangat tinggi dari investor asing untuk berinvestasi di sektor properti Indonesia, terutama di segmen properti komersial dan hunian mewah," ungkap Kepala BKPM, Pak Bahlil Lahadalia.

Jakarta, Bali, dan Surabaya menjadi tiga kota dengan investasi properti asing tertinggi. Di Jakarta, investasi difokuskan pada pembangunan gedung perkantoran dan pusat perbelanjaan modern. Sementara di Bali, investor lebih tertarik pada pengembangan resort dan villa mewah.

Para pengamat ekonomi menilai peningkatan investasi ini didorong oleh stabilitas ekonomi makro Indonesia, pertumbuhan kelas menengah, dan regulasi yang semakin kondusif. Pemerintah juga terus melakukan reformasi regulasi untuk menarik lebih banyak investasi asing.

Namun, para ahli juga mengingatkan pentingnya menjaga keseimbangan antara menarik investasi asing dan melindungi kepentingan investor lokal. Pemerintah diminta untuk terus mengawasi perkembangan pasar properti agar tidak terjadi bubble atau gelembung properti.

Untuk tahun depan, BKPM menargetkan investasi asing di sektor properti akan terus tumbuh minimal 10%, sejalan dengan pertumbuhan ekonomi nasional yang diproyeksikan mencapai 5.5%.`,
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1680169590313-9a14f3cd8148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Kuliner',
    title: 'Rendang Indonesia Kembali Masuk Daftar 50 Makanan Terenak di Dunia',
    description: 'Masakan khas Padang ini kembali meraih pengakuan internasional sebagai salah satu makanan terlezat di dunia.',
    timestamp: '3 jam yang lalu',
    author: 'Fitri Handayani',
    content: `Padang - Rendang, masakan khas Minangkabau dari Sumatra Barat, kembali masuk dalam daftar 50 Makanan Terenak di Dunia versi CNN Travel. Ini adalah pengakuan ketiga kalinya rendang mendapat kehormatan tersebut.

Rendang menempati posisi ke-5 dalam daftar tahun ini, naik dari posisi ke-11 tahun lalu. Masakan yang terbuat dari daging sapi yang dimasak dengan santan kelapa dan bumbu rempah-rempah ini telah menjadi ikon kuliner Indonesia di mata dunia.

"Ini adalah kebanggaan besar bagi kami dan seluruh masyarakat Indonesia. Rendang bukan hanya makanan, tetapi juga warisan budaya yang harus kita lestarikan," kata Chef Juna, salah satu chef ternama Indonesia.

Proses pembuatan rendang yang memakan waktu berjam-jam dengan api kecil membuat daging menjadi empuk dan bumbu meresap sempurna. Kombinasi rempah-rempah seperti cabai, bawang, jahe, kunyit, dan serai menciptakan cita rasa yang unik dan kompleks.

Rendang telah menjadi salah satu menu favorit di restoran Indonesia di berbagai negara. Di London, New York, dan Tokyo, restoran Indonesia selalu menyajikan rendang sebagai menu andalan mereka.

Kementerian Pariwisata Indonesia berencana menggunakan pencapaian ini untuk mempromosikan kuliner Indonesia di tingkat internasional. Program "Indonesian Spice Up The World" akan diluncurkan tahun depan untuk memperkenalkan lebih banyak masakan tradisional Indonesia.`,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1618667054276-690d5271d35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Internet',
    title: 'Penetrasi Internet di Indonesia Capai 78% dari Total Populasi',
    description: 'Jumlah pengguna internet di Indonesia terus meningkat, didorong oleh infrastruktur digital yang semakin baik.',
    timestamp: '45 menit yang lalu',
    author: 'Andi Wijaya',
    content: `Jakarta - Asosiasi Penyelenggara Jasa Internet Indonesia (APJII) melaporkan bahwa penetrasi internet di Indonesia telah mencapai 78% dari total populasi. Angka ini setara dengan 215 juta pengguna internet aktif.

Data survei APJII menunjukkan peningkatan signifikan dari tahun lalu yang hanya mencapai 73.7%. Pertumbuhan ini didorong oleh perbaikan infrastruktur digital, harga paket data yang semakin terjangkau, dan peningkatan literasi digital masyarakat.

"Pandemi COVID-19 telah mempercepat transformasi digital di Indonesia. Masyarakat semakin menyadari pentingnya internet untuk berbagai aspek kehidupan," ungkap Ketua APJII, Jamalul Izza.

Jawa dan Bali masih mendominasi pengguna internet dengan penetrasi mencapai 85%, disusul Sumatra 76%, Kalimantan 72%, dan Sulawesi 68%. Papua menjadi wilayah dengan penetrasi terendah yakni 54%, meskipun menunjukkan pertumbuhan tertinggi sebesar 12% dibanding tahun lalu.

Penggunaan internet paling banyak untuk media sosial (89%), diikuti oleh messenger (87%), menonton video online (79%), dan belanja online (68%). E-commerce dan fintech menjadi sektor yang paling banyak menarik pengguna baru.

Pemerintah menargetkan penetrasi internet mencapai 90% pada tahun 2030 melalui program Palapa Ring dan pembangunan infrastruktur digital di daerah 3T (Tertinggal, Terdepan, Terluar).`,
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1629137780355-57d6f4aeac0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Kesehatan',
    title: 'Program Vaksinasi Booster Dimulai di 34 Provinsi',
    description: 'Pemerintah meluncurkan program vaksinasi booster untuk meningkatkan kekebalan masyarakat.',
    timestamp: '1 jam yang lalu',
    author: 'Dr. Maya Sari',
    content: `Jakarta - Kementerian Kesehatan resmi meluncurkan program vaksinasi booster COVID-19 di seluruh 34 provinsi di Indonesia. Program ini menargetkan 50 juta penerima dosis booster dalam tiga bulan pertama.

Menteri Kesehatan Budi Gunadi Sadikin mengatakan program ini penting untuk mempertahankan kekebalan tubuh masyarakat terhadap virus COVID-19 dan varian-varian barunya. "Antibodi dari vaksinasi dosis kedua mulai menurun setelah 6 bulan, sehingga booster sangat diperlukan," jelasnya.

Vaksinasi booster akan diprioritaskan untuk tenaga kesehatan, lansia di atas 60 tahun, dan penderita komorbid. Masyarakat umum dapat menerima vaksin booster minimal 6 bulan setelah vaksinasi dosis kedua.

Jenis vaksin yang digunakan untuk booster antara lain Pfizer, Moderna, dan AstraZeneca. Penelitian menunjukkan bahwa kombinasi vaksin yang berbeda (mix and match) dapat memberikan perlindungan yang lebih baik.

Selama peluncuran hari pertama, lebih dari 100.000 orang telah menerima vaksin booster di berbagai sentra vaksinasi. Tidak ada laporan efek samping serius, sebagian besar hanya mengalami gejala ringan seperti nyeri di tempat suntikan dan demam ringan.

Pemerintah juga mengingatkan masyarakat untuk tetap menjalankan protokol kesehatan meskipun sudah menerima vaksin booster. Penggunaan masker, menjaga jarak, dan mencuci tangan tetap menjadi langkah pencegahan yang efektif.`,
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1611812694205-118977f6e5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Olahraga',
    title: 'Stadion Baru di Jakarta Siap Menampung 50 Ribu Penonton',
    description: 'Stadion modern berstandar internasional ini akan menjadi venue utama untuk berbagai pertandingan sepak bola.',
    timestamp: '2 jam yang lalu',
    author: 'Hendra Setiawan',
    content: `Jakarta - Stadion Jakarta International yang baru saja selesai dibangun resmi dibuka untuk umum. Stadion modern berkapasitas 50.000 penonton ini menjadi salah satu venue olahraga terbesar dan tercanggih di Asia Tenggara.

Stadion yang dibangun dengan biaya Rp 3.5 triliun ini memiliki fasilitas lengkap termasuk ruang VIP, sky box, ruang press modern, dan sistem audio visual berteknologi tinggi. Lapangan rumput menggunakan sistem hybrid grass yang memadukan rumput alami dan sintetis.

"Stadion ini dirancang dengan standar FIFA dan akan menjadi home base untuk klub-klub sepak bola Jakarta. Kami juga siap menjadi tuan rumah untuk pertandingan internasional," kata Gubernur DKI Jakarta.

Selain untuk pertandingan sepak bola, stadion ini juga dapat digunakan untuk konser musik dan acara-acara besar lainnya. Sistem atap yang dapat dibuka-tutup memungkinkan stadion digunakan dalam berbagai kondisi cuaca.

Stadion ini dilengkapi dengan sistem parkir berlapis yang dapat menampung hingga 3.000 kendaraan. Akses transportasi umum juga sangat mudah dengan stasiun MRT dan TransJakarta yang berada tepat di depan stadion.

Pertandingan perdana akan digelar minggu depan antara Persija Jakarta melawan klub dari Thailand. Tiket pertandingan sudah dibuka untuk umum dengan harga mulai dari Rp 50.000 hingga Rp 500.000 untuk VIP.`,
  },
];
