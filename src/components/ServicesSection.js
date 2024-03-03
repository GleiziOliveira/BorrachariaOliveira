"use client";
import React from "react"
import CardSection from "./CardSection"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projectsData = [
  {
    id: 1,
    title: "Venda de Pneus",
    description: "Trabalhamos com venda de Pneus.",
  },
  {
    id: 2,
    title: "Concertos",
    description: "O pneu furou, cortou, trabalhamos com reparos e consertos.",
  },
  {
    id: 3,
    title: "Prestador de Serviços",
    description: "Prestamos serviços a outros Borracheiros",
  },
  {
    id: 4,
    title: "Montagem de Pneus",
    description:
      "Comprou pneus novos na internet ou em lojas e precisa montar, podemos te ajudar.",
  },
  {
    id: 5,
    title: "Vulcanização de Pneus",
    description:
      "A vulcanização no pneu é um método de reparo que é realizado quando o mesmo tem sua lateral furada devido a algum objeto na estrada.",
  },
  {
    id: 6,
    title: "Ajuda com dúvidas",
    description:
      "Tem alguma dúvida sobre a troca de pneus, reparos, podemos te ajudar.",
  },
]

export default function ServicesSection(){
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section id="services">
      <h2 className="text-center text-4xl font-mediun text-textColor mt-4 mb-8 md:mb-12">
        Conheça nossos <strong>Serviços</strong>
      </h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 mb-4" ref={ref}>
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardSection
              key={project.id}
              title={project.title}
              description={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}


