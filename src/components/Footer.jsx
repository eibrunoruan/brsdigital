import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-10 px-8 lg:px-32">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">BRSDigital</h2>
          <p className="text-sm text-gray-400 font-normal">
            
          </p>
        </div>

        {/* Services */}
        <div className="text-left">
          <h3 className="text-xl mb-4">Serviços</h3>
          <ul>
            <li className="text-[#ceaac9] text-lg font-normal">Criação de Websites</li>
            <li className="text-[#ceaac9] text-lg font-normal">Design Responsivo</li>
            <li className="text-[#ceaac9] text-lg font-normal">Soluções Personalizadas</li>
            <li className="text-[#ceaac9] text-lg font-normal">Manutenção e Suporte</li>
            <li className="text-[#ceaac9] text-lg font-normal">SEO e Otimização</li>
          </ul>
        </div>

        {/* Recursos */}
        <div className="text-left">
          <h3 className="text-xl  mb-4">Recursos</h3>
          <ul>
            <li className="text-[#ffffff] text-lg font-normal">Diferenciais</li>
            <li className="text-[#ffffff] text-lg font-normal">Trabalhos</li>
          </ul>
        </div>

        {/* Contato */}
        <div className="text-left">
          <h3 className="text-xl mb-4">Contato</h3>
          <ul>
            <li>
              <a href="https://wa.me/47984731079" className="text-[#ffffff] text-lg font-normal">
                Fale conosco
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 text-left">
        {/* Address */}
        <p className="font-normal text-base">
          © BRSDigital. 2025. Todos os direitos reservados. <br /> Política de Privacidade | Termos de Uso
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a href="https://github.com/eibrunoruan" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl hover:text-white" />
          </a>
          <a href="https://instagram.com/eibrunoruan" target="_blank" rel="noreferrer">
            <FaInstagram className="text-xl hover:text-white" />
          </a>
          <a href="https://wa.me/47984731079" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-xl hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/eibrunoruan" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl hover:text-white" />
          </a>
        </div>

      </div>

      {/* Scroll to Top */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700"
      >
        <HiArrowUp className="text-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
