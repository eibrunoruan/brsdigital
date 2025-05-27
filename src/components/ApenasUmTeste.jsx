import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import imagem1 from "../assets/imgs/Captura de tela 2025-02-26 182112.png";
import imagem2 from "../assets/imgs/image2.png";
import imagem3 from "../assets/imgs/imagem3.png";

const ApenasUmTeste = () => {
  // Array de projetos com imagem, título e descrição
  const projects = [
    { src: imagem1, title: "Creative Studios", description: "Estúdio de animação." },
    { src: imagem2, title: "MangaPre", description: "Site de reviews de cultura Geek." },
    { src: imagem3, title: "SAAS-Idol", description: "Micro-serviço de criação de página para idolos." },
  ];

  // Duplicando os projetos para efeito de scroll infinito
  const duplicatedProjects = [...projects, ...projects];

  // Ref e estado para medir a largura do container
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Divide por 2 pois duplicamos o array de projetos
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="font-normal flex flex-col items-center bg-[#FDF3ED] py-16 px-8 lg:px-32 space-y-12">
      {/* Seção de introdução */}
      <motion.div
        className="w-full max-w-[1280px] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-texto text-3xl sm:text-4xl lg:text-5xl leading-relaxed mb-6">
          Com nossos{" "}
          <span className="bg-purple-200 px-2 py-0.5 rounded-3xl inline-block">
            projetos 
          </span>
          inovadores, sua
          <br />
          <span className="bg-orange-200 px-2 py-0.5 rounded-3xl inline-block">
            marca
          </span>{" "}
          se destaca e gera{" "}
          <span className="bg-blue-200 px-2 py-0.5 rounded-3xl inline-block">
            resultados incríveis
          </span>
          .
        </h2>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Nossos projetos combinam inovação, criatividade e tecnologia para entregar soluções que transformam ideias em realidade.
        </p>
      </motion.div>

      {/* Carrossel de projetos */}
      <div className="w-full max-w-[1000px] overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex space-x-6"
          animate={{ x: [0, -containerWidth] }}
          transition={{ x: { repeat: Infinity, duration: 15, ease: "linear" } }}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative w-80 h-56 flex-shrink-0 rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay com detalhes do projeto */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-2">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                <p className="text-white text-xs text-center">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call-to-Action */}
      <motion.div
        className="w-full max-w-[1280px] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <p className="text-lg text-gray-700 mb-2">
          Faça que nem nossos clientes e venha fazer um orçamento do seu projeto
        </p>
        <button className="mt-2 px-6 py-3 bg-orange-500 text-white rounded-full shadow hover:bg-orange-700 transition duration-300">
          Solicite um Orçamento
        </button>
      </motion.div>
    </section>
  );
};

export default ApenasUmTeste;
