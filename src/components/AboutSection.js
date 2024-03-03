"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function AboutSection(){
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/imagens/homemMaquina.jpeg"
          alt="Um homem mexendo em uma máquina de montar e desmonstar pneu"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-justify text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-textColor mb-4">SOBRE NÓS</h2>
          <p className="text-base lg:text-sm">
            Trabalhei muitos anos como borracheiro para outras pessoas e sempre
            gostei do que eu fazia, até que tive a oportunidade de abrir a minha
            própria. Prezo muito pelo bom atendimento e a qualidade do serviço,
            sendo esses os pilares da Borracharia Oliveira.
          </p>
          <strong className="m-1">Missão:</strong>
          <p className="text-base lg:text-sm">
            Oferecer serviços de borracharia confiáveis e de alta qualidade,
            proporcionando aos nossos clientes uma experiência excepcional,
            baseada em atendimento personalizado, eficiência e compromisso com a
            segurança veicular.
          </p>
          <strong className="m-1">Visão:</strong>
          <p className="text-base lg:text-sm">
            Ser reconhecida como a principal referência em serviços de
            borracharia na região, destacando-nos pela excelência no atendimento
            ao cliente, pela expertise técnica e pela constante inovação no
            setor automotivo.
          </p>
          <strong className="m-1">Valores:</strong>
          <p className="text-base lg:text-sm">
            Nossos valores é nosso comprometimento com a qualidade do serviço
            prestado, baseados em transparência, honestidade e integridade, para
            construirmos relações sólidas com nossos clientes. Valorizamos cada
            cliente como único, oferecendo atendimento personalizado e adaptado
            às suas necessidades, agindo com profissionalismo em todas as etapas
            do serviço, mantendo altos padrões de qualidade e eficiência.
          </p>
        </div>
      </div>
    </section>
  )
}


