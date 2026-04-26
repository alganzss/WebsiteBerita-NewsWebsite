import { useNavigate } from 'react-router';
import BreakingNewsTicker from '../components/BreakingNewsTicker';
import NewsCard from '../components/NewsCard';
import SmallNewsItem from '../components/SmallNewsItem';
import CategorySection from '../components/CategorySection';
import { newsArticles } from '../data/newsData';

const financeArticles = [
  { title: 'Rupiah Menguat ke Level Rp 15.200 per Dolar AS', timestamp: '30 menit yang lalu' },
  { title: 'Bank Indonesia Pertahankan Suku Bunga Acuan di 5.75%', timestamp: '1 jam yang lalu' },
  { title: 'Indeks Harga Saham Gabungan Ditutup Menguat 0.8%', timestamp: '2 jam yang lalu' },
  { title: 'Inflasi Juli Tercatat 2.1%, Terendah dalam 5 Bulan', timestamp: '3 jam yang lalu' },
  { title: 'Pemerintah Targetkan Pertumbuhan Ekonomi 5.5% Tahun Depan', timestamp: '4 jam yang lalu' },
];

const sportsArticles = [
  { title: 'Pelatih Timnas: Kami Siap Hadapi Laga Kualifikasi', timestamp: '45 menit yang lalu' },
  { title: 'Pemain Muda Indonesia Dipinang Klub Eropa', timestamp: '1 jam yang lalu' },
  { title: 'Federasi Sepak Bola Umumkan Jadwal Liga 1 Musim Baru', timestamp: '2 jam yang lalu' },
  { title: 'Atlet Bulu Tangkis Indonesia Raih Medali Emas', timestamp: '3 jam yang lalu' },
  { title: 'Venue Olimpiade 2028 Mulai Dibangun di Jakarta', timestamp: '5 jam yang lalu' },
];

const healthArticles = [
  { title: 'Kemenkes: Kasus COVID-19 Turun 40% Minggu Ini', timestamp: '1 jam yang lalu' },
  { title: 'RS Baru di Jawa Timur Layani 1000 Pasien Per Hari', timestamp: '2 jam yang lalu' },
  { title: '5 Cara Menjaga Kesehatan di Musim Hujan', timestamp: '3 jam yang lalu' },
  { title: 'Peneliti Indonesia Temukan Terapi Baru Diabetes', timestamp: '4 jam yang lalu' },
  { title: 'Program BPJS Kesehatan Diperluas ke 10 Juta Peserta', timestamp: '5 jam yang lalu' },
];

const autoArticles = [
  { title: 'Mobil Listrik Produksi Dalam Negeri Mulai Dipasarkan', timestamp: '1 jam yang lalu' },
  { title: 'Penjualan Motor di Indonesia Naik 12% di Semester Pertama', timestamp: '2 jam yang lalu' },
  { title: 'Uji Coba Kendaraan Otonom Dimulai di Jakarta', timestamp: '3 jam yang lalu' },
  { title: 'Subsidi BBM untuk Angkutan Umum Diperpanjang', timestamp: '4 jam yang lalu' },
  { title: 'Tol Trans Jawa Percepat Distribusi Kendaraan', timestamp: '5 jam yang lalu' },
];

export default function HomePage() {
  const navigate = useNavigate();

  const mainNews = newsArticles[0];
  const latestNews = newsArticles.slice(1, 7);
  const secondaryNews = newsArticles.slice(0, 3);

  const handleNewsClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  return (
    <>
      <BreakingNewsTicker />

      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div onClick={() => handleNewsClick(mainNews.id)} className="cursor-pointer">
              <NewsCard
                image={mainNews.image}
                category={mainNews.category}
                title={mainNews.title}
                description={mainNews.description}
                timestamp={mainNews.timestamp}
                isLarge
              />
            </div>
          </div>

          <div className="bg-white p-4 space-y-4">
            <div className="border-b-2 border-[#e02020] pb-2 mb-4">
              <h2 className="uppercase tracking-wide">Berita Terbaru</h2>
            </div>
            {latestNews.slice(0, 4).map((news) => (
              <div key={news.id} onClick={() => handleNewsClick(news.id)} className="cursor-pointer">
                <SmallNewsItem
                  image={news.image}
                  category={news.category}
                  title={news.title}
                  timestamp={news.timestamp}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestNews.slice(0, 6).map((news) => (
            <div key={news.id} onClick={() => handleNewsClick(news.id)} className="cursor-pointer">
              <NewsCard
                image={news.image}
                category={news.category}
                title={news.title}
                timestamp={news.timestamp}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {secondaryNews.map((news) => (
            <div key={news.id} onClick={() => handleNewsClick(news.id)} className="cursor-pointer">
              <NewsCard
                image={news.image}
                category={news.category}
                title={news.title}
                timestamp={news.timestamp}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategorySection title="Finansial" articles={financeArticles} />
          <CategorySection title="Olahraga" articles={sportsArticles} />
          <CategorySection title="Kesehatan" articles={healthArticles} />
          <CategorySection title="Otomotif" articles={autoArticles} />
        </div>
      </main>
    </>
  );
}
