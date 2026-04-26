interface CategorySectionProps {
  title: string;
  articles: Array<{
    title: string;
    timestamp: string;
  }>;
}

export default function CategorySection({ title, articles }: CategorySectionProps) {
  return (
    <div className="bg-white">
      <div className="bg-[#e02020] text-white px-4 py-2">
        <h2 className="uppercase tracking-wide">{title}</h2>
      </div>
      <div className="p-4 space-y-3">
        {articles.map((article, index) => (
          <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
            <a href="#" className="text-sm hover:text-[#e02020] transition-colors block">
              {article.title}
            </a>
            <span className="text-gray-400 text-xs mt-1 block">{article.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
