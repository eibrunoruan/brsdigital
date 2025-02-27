import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import heroImage from "../assets/imgs/62f3aa8639ce3516e4e302b4_Frame 117.svg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="
        bg-[#FDF3ED]
        pt-4
        sm:pt-12
        md:pt-20
        lg:pt-28
        w-full
      "
    >
      <div
        className="
          max-w-[1280px]
          w-full
          mx-auto
          px-3
          lg:pl-8
          lg:pr-0
          flex
          flex-col-reverse
          lg:flex-row
          items-start
          justify-between
        "
      >
        {/* TEXTO */}
        <div
          className={`
            flex-1
            mx-0
            transform
            transition-opacity duration-1000

            // Centraliza no mobile, alinha à esquerda em sm+
            text-center sm:text-left

            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="text-texto text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-normal">
            <span className="inline-flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="bg-purple-200 px-2 py-1 rounded-3xl">Desenvolva</span>
              <span> sua </span>
              <span className="bg-orange-200 px-2 py-1 rounded-3xl">marca</span>
              <span> e deixe sua </span>
              <span className="bg-blue-200 px-2 py-1 rounded-3xl">presença</span>
              <span> na web conosco</span>
            </span>
          </h1>

          <p className="font-normal text-base sm:text-lg lg:text-2xl text-[#222222] mt-6">
            Impulsione sua marca com websites rápidos,
            eficazes e alinhados ao seu branding.
          </p>

          {/* BOTOES: centralizados no mobile, esquerda em sm+ */}
          <div
            className="
              flex flex-wrap gap-6
              justify-center sm:justify-start
              items-center
              mt-8
            "
          >
            {/* BOTÃO "SAIBA MAIS" - MAIOR */}
            <Button
              variant="contained"
              onClick={() =>
                window.location.href = "https://api.whatsapp.com/send?phone=5547984731079"
              }
              sx={{
                background: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)",
                color: "#fff",
                borderRadius: 9999,
                boxShadow: "0 4px 10px rgba(249, 115, 22, 0.3)",
                transition: "all 0.3s ease-out",
                "&:hover": {
                  background: "linear-gradient(90deg, #EA580C 0%, #F97316 100%)",
                  boxShadow: "0 6px 15px rgba(249, 115, 22, 0.4)",
                  transform: "translateY(-3px)",
                },
              }}
              className="
                w-auto
                min-w-[280px]
                px-16 py-8
                text-xl
                sm:px-20 sm:py-10 sm:text-2xl
                lg:px-24 lg:py-12 lg:text-3xl
                font-medium
                transition-all
                transform
              "
            >
              Saiba Mais
            </Button>


            {/* BOTÃO "FALE CONOSCO" - MAIOR TAMBÉM */}
            
          </div>
        </div>

        {/* IMAGEM */}
        <div
          className={`
            w-full lg:w-[470px]
            mt-2 lg:mt-0
            transform transition-opacity duration-1000
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="
              mx-auto
              w-[220px]
              sm:w-[280px]
              md:w-[350px]
              lg:w-auto
              h-auto
              rounded-lg
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
