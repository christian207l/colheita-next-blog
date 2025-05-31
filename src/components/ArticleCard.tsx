
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  featured?: boolean;
}

const ArticleCard = ({ title, excerpt, author, date, image, category, featured = false }: ArticleCardProps) => {
  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <img
            src={image}
            alt={title}
            className={`w-full object-cover ${featured ? 'h-64 md:h-full' : 'h-48'}`}
          />
        </div>
        <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
              {category}
            </span>
            {featured && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                Destaque
              </span>
            )}
          </div>
          
          <h2 className={`font-bold mb-3 line-clamp-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h2>
          
          <p className={`text-gray-600 mb-4 line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <User className="h-4 w-4 mr-1" />
              <span className="mr-4">{author}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
            
            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
              Ler mais
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
