import { useEffect, useState } from 'react';

const breakingNews = [
  'Presiden mengumumkan kebijakan ekonomi baru untuk meningkatkan pertumbuhan',
  'Timnas Indonesia menang 3-1 melawan Thailand di Piala AFF',
  'Harga minyak dunia naik 5% di tengah ketegangan Timur Tengah',
  'Jakarta meluncurkan program transportasi umum gratis untuk pelajar',
  'Rupiah menguat terhadap dolar AS di pasar perdagangan hari ini',
];

export default function BreakingNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center gap-4">
        <div className="bg-[#e02020] px-3 py-1 text-xs uppercase tracking-wider shrink-0">
          Breaking News
        </div>
        <div className="overflow-hidden flex-1">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {breakingNews.map((news, index) => (
                <div key={index} className="min-w-full text-sm">
                  {news}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
