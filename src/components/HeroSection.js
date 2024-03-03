"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-bold">
            <span className="text-transparent">BORRACHARIA OLIVEIRA 👋</span>
          </h1>
          <p className="text-textColor sm:text-lg mb-6 lg:text-xl">
            Precisando de um serviço confiável de borracharia?  Venha nos visitar ou entre em contato 📞.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 border-2 border-slate-200 text-textColor hover:text-colorHover hover:border-colorHover"
            >
              Entre em contato
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative ">
            <Image
              src="/imagens/Foto.png"
              alt="Mãos segurando um Pneu"
              className="absolute inset-0 object-cover"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
};

export default HeroSection;
