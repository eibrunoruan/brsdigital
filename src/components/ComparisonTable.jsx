import React from "react";
import { motion } from "framer-motion";

const ComparisonTable = () => {
  const renderIcon = (isAvailable, isBRS) => {
    return isAvailable ? (
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto ${
          isBRS ? "bg-green-200 text-green-700" : "text-green-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : (
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto ${
          isBRS ? "bg-red-200 text-red-700" : "text-red-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  };

  return (
    <section className="font-normal flex flex-col items-center bg-[#FDF3ED] py-16 px-8 lg:px-32">
      <motion.div
        className="w-full max-w-[1280px] mx-auto text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* h2 unificado */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl  mb-4">
          Escolher nossos serviços significa garantir uma presença digital sólida, confiável e profissional.
        </h2>
      </motion.div>
      <motion.div
        className="overflow-x-auto w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <table className="table-auto border-collapse w-full max-w-[1280px] mx-auto bg-gradient-to-br from-[#EAF6FF] to-[#ffffff] rounded-[3rem] shadow-3xl">
          <thead>
            <tr className="bg-[#EAF6FF] h-28">
              {/* th unificados */}
              <th className="px-6 py-6 text-left font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800">
                &nbsp;
              </th>
              <th className="px-6 py-6 text-center font-bold text-xl sm:text-2xl lg:text-3xl text-orange-600">
                BRS Digital
              </th>
              <th className="px-6 py-6 text-center font-bold text-xl sm:text-2xl lg:text-3xl text-gray-600">
                Outros
              </th>
            </tr>
          </thead>
          <tbody className="text-base sm:text-lg lg:text-xl">
            {[
              { service: "Identidade visual personalizada", brs: true, outros: false },
              { service: "Desenvolvimento de código sob medida", brs: true, outros: false },
              { service: "Site online 24h sem custos adicionais", brs: true, outros: false },
              { service: "Suporte 24/7", brs: true, outros: false },
              { service: "Infraestrutura auto-hospedada", brs: true, outros: false },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              >
                <td className="px-6 py-5 border-b text-left font-medium text-gray-700">
                  {row.service}
                </td>
                <td className="px-6 py-5 border-b text-center bg-green-50">{renderIcon(row.brs, true)}</td>
                <td className="px-6 py-5 border-b text-center">{renderIcon(row.outros, false)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        {/* p unificado */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-700">
          Não perca mais tempo e construa sua presença conosco.{" "}
          <a href="#" className="text-orange-500 underline">Fale agora com um especialista</a>
        </p>
      </motion.div>
    </section>
  );
};

export default ComparisonTable;
