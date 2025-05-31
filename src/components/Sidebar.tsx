
import { TrendingUp, Bookmark, Tag } from 'lucide-react';

const Sidebar = () => {
  const popularArticles = [
    {
      title: "5 Tendências da Agricultura para 2024",
      date: "10 Jan, 2024"
    },
    {
      title: "Como Aumentar a Produtividade do Solo",
      date: "8 Jan, 2024"
    },
    {
      title: "Sustentabilidade no Agronegócio",
      date: "5 Jan, 2024"
    },
    {
      title: "Tecnologia na Pecuária Moderna",
      date: "3 Jan, 2024"
    }
  ];

  const categories = [
    { name: "Cultivo", count: 45 },
    { name: "Pecuária", count: 32 },
    { name: "Tecnologia", count: 28 },
    { name: "Sustentabilidade", count: 24 },
    { name: "Mercado", count: 19 },
    { name: "Inovação", count: 15 }
  ];

  return (
    <aside className="space-y-8">
      {/* Popular Articles */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">Artigos Populares</h3>
        </div>
        <div className="space-y-4">
          {popularArticles.map((article, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
              <h4 className="font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors duration-200 mb-1">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500">{article.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Tag className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">Categorias</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer transition-colors duration-200">
              <span className="text-gray-700 hover:text-green-600">{category.name}</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center mb-3">
          <Bookmark className="h-5 w-5 mr-2" />
          <h3 className="text-lg font-bold">Newsletter</h3>
        </div>
        <p className="text-green-100 mb-4 text-sm">
          Receba as últimas novidades da agricultura direto no seu email.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Seu melhor email"
            className="w-full px-3 py-2 rounded border border-green-500 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition-colors duration-200">
            Assinar Grátis
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
