import React from "react";
import { motion } from "framer-motion";
import foto1 from "../assets/imgs/foto1.jpg";
import foto2 from "../assets/imgs/foto2.webp";
import foto4 from "../assets/imgs/foto4.png";

const Reviews = () => {
  return (
    <section className="font-normal flex flex-col items-center bg-[#f8f3ff] py-16 px-8 lg:px-32 space-y-12">
      {/* Seção de introdução dos reviews */}
      <motion.div
        className="w-full max-w-[1280px] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-4">
          <span className="text-yellow-500">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl">Reviews</h3>
        <h4 className="text-gray-600 text-base sm:text-lg lg:text-xl mt-2">
          O que nossos clientes dizem
        </h4>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-base sm:text-lg lg:text-xl">
          Confira o que nossos clientes têm a dizer sobre a experiência de trabalhar conosco.
        </p>
      </motion.div>

      {/* Cards de Depoimentos */}
      <div className="w-full max-w-[1280px]">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 flex flex-col items-center"
          >
            <div className="flex justify-center mb-2">
              <span className="text-yellow-500">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <p className="text-gray-600 italic text-center mb-4">
              "O trabalho da BRS Digital foi essencial para o sucesso do nosso projeto."
            </p>
            <div className="flex items-center">
              <img
                src={foto4}
                alt="Usuário"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold">Julio César</p>
                <p className="text-sm text-gray-500">Animador @creativestudios</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 flex flex-col items-center"
          >
            <div className="flex justify-center mb-2">
              <span className="text-yellow-500">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <p className="text-gray-600 italic text-center mb-4">
              "Toda equipe foi muito atenciosa e o resultado final ficou incrível."
            </p>
            <div className="flex items-center">
              <img
                src={foto1}
                alt="Usuário"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold">Igor</p>
                <p className="text-sm text-gray-500">CEO @MangasPre</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 flex flex-col items-center"
          >
            <div className="flex justify-center mb-2">
              <span className="text-yellow-500">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <p className="text-gray-600 italic text-center mb-4">
              "No começo fiquei com um pé atrás, mas tudo superou minhas expectativas."
            </p>
            <div className="flex items-center">
              <img
                src={foto2}
                alt="Usuário"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold">Willyan Feiller</p>
                <p className="text-sm text-gray-500">CEO @SAAS-Idol</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call-to-Action dos depoimentos */}
      <motion.div
        className="w-full max-w-[1280px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
      </motion.div>
    </section>
  );
};

export default Reviews;
