
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              O Futuro da
              <span className="block text-yellow-300">Agricultura</span>
              Começa Aqui
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Descubra as últimas inovações, técnicas sustentáveis e tendências que estão 
              transformando o agronegócio brasileiro e mundial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Explorar Artigos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800">
                Newsletter Gratuita
              </Button>
            </div>
          </div>
          
          {/* Featured Article Card */}
          <div className="bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=300&fit=crop"
              alt="Agricultura moderna"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15 de Janeiro, 2024</span>
                <User className="h-4 w-4 ml-4 mr-2" />
                <span>Dr. Maria Silva</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Agricultura de Precisão: Como a Tecnologia está Revolucionando o Campo
              </h3>
              <p className="text-gray-600 mb-4">
                Entenda como drones, sensores IoT e inteligência artificial estão 
                aumentando a produtividade e reduzindo custos...
              </p>
              <Button variant="ghost" className="p-0 text-green-600 hover:text-green-700">
                Ler mais <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
