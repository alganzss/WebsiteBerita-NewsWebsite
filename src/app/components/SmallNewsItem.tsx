import { ImageWithFallback } from './figma/ImageWithFallback';

interface SmallNewsItemProps {
  image: string;
  category: string;
  title: string;
  timestamp: string;
}

export default function SmallNewsItem({ image, category, title, timestamp }: SmallNewsItemProps) {
  return (
    <div className="flex gap-3 group cursor-pointer pb-3 border-b border-gray-200 last:border-b-0">
      <div className="w-24 h-16 shrink-0 relative overflow-hidden bg-gray-200">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[#e02020] text-xs uppercase tracking-wide">{category}</span>
        <h4 className="text-sm font-bold line-clamp-2 group-hover:text-[#e02020] transition-colors mt-1">
          {title}
        </h4>
        <span className="text-gray-400 text-xs mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
}
