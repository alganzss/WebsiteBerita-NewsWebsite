import { useParams, useNavigate } from 'react-router';
import { getNewsByRegion } from '../data/regionalNews';
import { ArrowLeft, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function RegionalPage() {
  const { region } = useParams();
  const navigate = useNavigate();

  const regionName = region
    ? region
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Regional';

  const regionalNews = region ? getNewsByRegion(region) : [];

  const handleNewsClick = (id: string) => {
    navigate(`/regional/${region}/${id}`);
  };

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

        <div className="mb-8 bg-[#e02020] text-white p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-8 h-8" />
            <h1 className="text-3xl font-bold">{regionName}</h1>
          </div>
          <p className="text-white/90">
            Berita terkini dan informasi dari {regionName}
          </p>
        </div>

        {regionalNews.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Menampilkan {regionalNews.length} berita dari {regionName}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {regionalNews.map((news) => (
                <article
                  key={news.id}
                  onClick={() => handleNewsClick(news.id)}
                  className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="mb-3">
                        <span className="bg-[#e02020] text-white px-3 py-1 text-xs uppercase tracking-wide rounded">
                          {news.region}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold mb-3 hover:text-[#e02020] transition-colors">
                        {news.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {news.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{news.author}</span>
                        <span>•</span>
                        <span>{news.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Belum Ada Berita
            </h2>
            <p className="text-gray-500 mb-6">
              Saat ini belum ada berita dari {regionName}. Silakan cek kembali nanti.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#e02020] text-white px-6 py-2 rounded hover:bg-[#c01818] transition-colors"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
