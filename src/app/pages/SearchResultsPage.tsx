import { useSearchParams, useNavigate } from 'react-router';
import { newsArticles } from '../data/newsData';
import { regionalNewsData } from '../data/regionalNews';
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';

  const searchResults = () => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();

    // Search in national news
    const nationalResults = newsArticles
      .filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm) ||
          news.description.toLowerCase().includes(searchTerm) ||
          news.content.toLowerCase().includes(searchTerm) ||
          news.category.toLowerCase().includes(searchTerm)
      )
      .map((news) => ({ ...news, type: 'national' as const }));

    // Search in regional news
    const regionalResults = regionalNewsData
      .filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm) ||
          news.description.toLowerCase().includes(searchTerm) ||
          news.content.toLowerCase().includes(searchTerm) ||
          news.region.toLowerCase().includes(searchTerm)
      )
      .map((news) => ({ ...news, type: 'regional' as const }));

    return [...nationalResults, ...regionalResults];
  };

  const results = searchResults();

  const handleNewsClick = (news: any) => {
    if (news.type === 'regional') {
      const regionSlug = news.region.toLowerCase().replace(/\s+/g, '-');
      navigate(`/regional/${regionSlug}/${news.id}`);
    } else {
      navigate(`/news/${news.id}`);
    }
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

        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <SearchIcon className="w-6 h-6 text-[#e02020]" />
            <h1 className="text-2xl font-bold">Hasil Pencarian</h1>
          </div>
          <p className="text-gray-600">
            {query ? (
              <>
                Menampilkan hasil untuk: <span className="font-semibold">"{query}"</span>
              </>
            ) : (
              'Masukkan kata kunci pencarian'
            )}
          </p>
          {results.length > 0 && (
            <p className="text-gray-500 text-sm mt-2">
              Ditemukan {results.length} berita
            </p>
          )}
        </div>

        {query && results.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {results.map((news) => (
              <article
                key={`${news.type}-${news.id}`}
                onClick={() => handleNewsClick(news)}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <div className="relative aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="bg-[#e02020] text-white px-3 py-1 text-xs uppercase tracking-wide rounded">
                        {'category' in news ? news.category : news.region}
                      </span>
                      {news.type === 'regional' && (
                        <span className="bg-blue-600 text-white px-3 py-1 text-xs uppercase tracking-wide rounded">
                          Regional
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold mb-3 hover:text-[#e02020] transition-colors">
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
        ) : query ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Tidak Ada Hasil
            </h2>
            <p className="text-gray-500 mb-6">
              Tidak ditemukan berita dengan kata kunci "{query}". Coba gunakan kata kunci lain.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Mulai Pencarian
            </h2>
            <p className="text-gray-500">
              Gunakan kotak pencarian di atas untuk mencari berita
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
