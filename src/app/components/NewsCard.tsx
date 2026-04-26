import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  timestamp: string;
  isLarge?: boolean;
  description?: string;
}

export default function NewsCard({ image, category, title, timestamp, isLarge, description }: NewsCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : 'aspect-[16/9]'} bg-gray-200`}>
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-[#e02020] text-white px-2 py-1 text-xs uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>
      <div className={`${isLarge ? 'mt-3' : 'mt-2'}`}>
        <h3 className={`group-hover:text-[#e02020] transition-colors ${isLarge ? 'text-xl font-bold' : 'text-sm font-bold'}`}>
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-400 text-xs">{timestamp}</span>
        </div>
      </div>
    </article>
  );
}
