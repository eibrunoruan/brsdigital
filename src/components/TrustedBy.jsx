import React from "react";

const TrustedBy = () => {
  const features = [
    {
      title: "Hospedagem Inclusa",
      description:
        "Seu site é hospedado em servidores de alta performance e segurança",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#e3b4fa]",
      textColor: "text-[#28292f]",
      rectangleBg: "bg-[#e3b4fa]",
      shadow: "shadow-[0_6px_0px_rgba(227,180,250,0.9)]",
    },
    {
      title: "Proteção e Segurança",
      description: "Seu site é protegido contra ataques e invasões",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#ffcd9f]",
      textColor: "text-[#28292f]",
      rectangleBg: "bg-[#ffcd9f]",
      shadow: "shadow-[0_6px_0px_rgba(255,205,159,0.9)]",
    },
    {
      title: "Consultoria Direta",
      description: "Sua presença online é construída do zero. Sem intermediários",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#b4dcfa]",
      textColor: "text-[#28292f]",
      rectangleBg: "bg-[#b4dcfa]",
      shadow: "shadow-[0_6px_0px_rgba(180,220,250,0.9)]",
    },
    {
      title: "SEO com Performance",
      description:
        "Otimizamos seu site para que ele seja facilmente encontrado no Google",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#222222]",
      textColor: "text-[#ffffff]",
      rectangleBg: "bg-[#222222]",
      shadow: "shadow-[0_6px_0px_rgba(34,34,34,1)]",
    },
  ];

  return (
    <section className="bg-[#f8f3ff] pt-16 py-12 px-6 lg:px-24">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl text-[#222222] leading-snug">
            Nossas certificações mostram a dedicação <br /> que temos na criação
            da sua marca virtual.
          </h2>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col md:flex-row items-center 
                border-[3px] rounded-[52px] p-6 md:p-12 
                ${feature.bgColor} ${feature.borderColor} ${feature.shadow}
              `}
            >
              {/* Retângulo do título */}
              <div
                className={`
                  flex items-center justify-center
                  w-full md:w-auto 
                  mb-4 md:mb-0 md:mr-8 
                  px-6 py-4 md:px-12 md:py-10
                  rounded-[32px] 
                  ${feature.rectangleBg}
                `}
              >
                <h3
                  className={`
                    text-base sm:text-lg md:text-xl lg:text-2xl
                    font-semibold 
                    text-left
                    ${feature.textColor}
                  `}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Descrição */}
              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
