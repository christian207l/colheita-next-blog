
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Index = () => {
  const articles = [
    {
      title: "Inteligência Artificial na Agricultura: O Futuro já Chegou",
      excerpt: "Descubra como a IA está revolucionando desde o plantio até a colheita, otimizando recursos e maximizando a produtividade agrícola.",
      author: "Dr. João Santos",
      date: "12 Jan, 2024",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      category: "Tecnologia",
      featured: true
    },
    {
      title: "Agricultura Vertical: Cultivando em Espaços Urbanos",
      excerpt: "Uma nova abordagem para a produção de alimentos que está transformando as cidades em centros agrícolas sustentáveis.",
      author: "Ana Costa",
      date: "10 Jan, 2024",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      category: "Inovação"
    },
    {
      title: "Pecuária Sustentável: Equilibrando Produção e Meio Ambiente",
      excerpt: "Estratégias modernas para criar gado de forma responsável, reduzindo impactos ambientais sem comprometer a produtividade.",
      author: "Carlos Silva",
      date: "8 Jan, 2024",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      category: "Pecuária"
    },
    {
      title: "Bioenergia: Transformando Resíduos Agrícolas em Energia",
      excerpt: "Como aproveitar restos de cultura e dejetos animais para gerar energia limpa e reduzir custos operacionais.",
      author: "Maria Oliveira",
      date: "6 Jan, 2024",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      category: "Sustentabilidade"
    },
    {
      title: "Agricultura de Precisão: Tecnologia a Serviço da Produtividade",
      excerpt: "Sistemas GPS, drones e sensores IoT estão mudando a forma como plantamos e colhemos no século XXI.",
      author: "Roberto Lima",
      date: "4 Jan, 2024",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
      category: "Tecnologia"
    },
    {
      title: "Mercado de Commodities: Tendências para 2024",
      excerpt: "Análise completa dos principais indicadores que vão influenciar os preços de grãos e carnes neste ano.",
      author: "Patricia Souza",
      date: "2 Jan, 2024",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      category: "Mercado"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Últimos Artigos</h2>
              <p className="text-gray-600">Fique por dentro das novidades do agronegócio</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  excerpt={article.excerpt}
                  author={article.author}
                  date={article.date}
                  image={article.image}
                  category={article.category}
                  featured={article.featured}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Carregar Mais Artigos
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
