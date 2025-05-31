
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Conteúdo": [
      "Artigos Recentes",
      "Categorias",
      "Autores",
      "Newsletter"
    ],
    "Temas": [
      "Agricultura Sustentável",
      "Tecnologia Agrícola",
      "Pecuária",
      "Mercado"
    ],
    "Recursos": [
      "Guias Práticos",
      "Calculadoras",
      "Downloads",
      "Glossário"
    ],
    "Empresa": [
      "Sobre Nós",
      "Contato",
      "Parcerias",
      "Política de Privacidade"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-2xl font-bold">AgriBlog</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Sua fonte confiável de informações sobre agricultura moderna, 
              sustentabilidade e inovação no campo.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-500" />
                <span>contato@agriblog.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-500" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-green-500" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; 2024 AgriBlog. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com 💚 para o agronegócio brasileiro</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
