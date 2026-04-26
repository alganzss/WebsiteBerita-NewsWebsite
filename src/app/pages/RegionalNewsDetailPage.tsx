import { useParams, useNavigate } from 'react-router';
import { regionalNewsData } from '../data/regionalNews';
import { ArrowLeft, Calendar, User, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function RegionalNewsDetailPage() {
  const { region, id } = useParams();
  const navigate = useNavigate();

  const article = regionalNewsData.find((news) => news.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Berita tidak ditemukan</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[#e02020] text-white px-6 py-2 rounded hover:bg-[#c01818] transition-colors"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const relatedNews = regionalNewsData
    .filter((news) => news.region === article.region && news.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1000px] mx-auto px-4 py-6">
        <button
          onClick={() => navigate(`/category/regional/${region}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#e02020] transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali ke Berita {article.region}</span>
        </button>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#e02020]" />
              <span className="bg-[#e02020] text-white px-3 py-1 text-sm uppercase tracking-wide">
                {article.region}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.timestamp}</span>
              </div>
            </div>

            <div className="mb-6">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4 font-semibold">{article.description}</p>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>
          </div>
        </article>

        {relatedNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Berita Terkait dari {article.region}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((news) => (
                <div
                  key={news.id}
                  onClick={() => navigate(`/regional/${region}/${news.id}`)}
                  className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/9] bg-gray-200">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[#e02020] text-xs uppercase tracking-wide">
                      {news.region}
                    </span>
                    <h3 className="font-bold text-sm mt-2 line-clamp-2 hover:text-[#e02020] transition-colors">
                      {news.title}
                    </h3>
                    <span className="text-gray-400 text-xs mt-2 block">{news.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
