import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="font-normal flex flex-col items-center bg-[#FDF3ED] py-12 px-6 lg:px-24">
      <div
        className={`w-full max-w-[1280px] mx-auto text-center transform transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* h2 atualizado */}
        <h2 className="text-texto text-3xl sm:text-4xl lg:text-5xl leading-relaxed mb-6">
          Com um <span className="bg-purple-200 px-2 py-0.5 rounded-3xl inline-block">site profissional</span>, sua
          <br />
           <span className="bg-orange-200 px-2 py-0.5 rounded-3xl inline-block">marca</span> ganha mais credibilidade, atrai novos clientes e melhora seus <span className="bg-blue-200 px-2 py-0.5 rounded-3xl inline-block">resultados</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div
            className={`transform transition-all duration-500 ease-out hover:scale-105 hover:text-orange-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* h3 (texto laranja mantém a cor original) */}
            <h3 className="text-orange-500 text-8xl sm:text-6xl lg:text-7xl font-bold">
              100x
            </h3>
            {/* p atualizado */}
            <p className="text-texto mt-2 text-base sm:text-lg lg:text-xl">
              Mais alcance
            </p>
          </div>

          <div
            className={`transform transition-all duration-500 ease-out hover:scale-105 hover:text-orange-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-orange-500 text-8xl sm:text-6xl lg:text-7xl font-bold">
              160M+
            </h3>
            <p className="text-texto mt-2 text-base sm:text-lg lg:text-xl">
              Têm acesso à internet
            </p>
          </div>

          <div
            className={`transform transition-all duration-500 ease-out hover:scale-105 hover:text-orange-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-orange-500 text-8xl sm:text-6xl lg:text-7xl font-bold">
              121M+
            </h3>
            <p className="text-texto mt-2 text-base sm:text-lg lg:text-xl">
              Já fizeram compras online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
