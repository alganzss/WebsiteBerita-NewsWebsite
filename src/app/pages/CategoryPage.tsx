import { useParams, useNavigate } from 'react-router';
import { newsArticles } from '../data/newsData';
import NewsCard from '../components/NewsCard';
import { ArrowLeft } from 'lucide-react';

const categoryMap: Record<string, string> = {
  berita: 'Berita',
  'berita-utama': 'Berita Utama',
  finansial: 'Finansial',
  hot: 'Hot',
  internet: 'Internet',
  olahraga: 'Olahraga',
  otomotif: 'Otomotif',
  travel: 'Travel',
  kuliner: 'Kuliner',
  kesehatan: 'Kesehatan',
};

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryName = category ? categoryMap[category] || category : 'Semua Berita';

  const filteredNews = category
    ? newsArticles.filter(news =>
        news.category.toLowerCase() === categoryName.toLowerCase()
      )
    : newsArticles;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#e02020] transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            Menampilkan {filteredNews.length} berita
          </p>
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => navigate(`/news/${news.id}`)}
                className="cursor-pointer"
              >
                <NewsCard
                  image={news.image}
                  category={news.category}
                  title={news.title}
                  timestamp={news.timestamp}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Belum ada berita di kategori ini</p>
          </div>
        )}
      </div>
    </div>
  );
}
