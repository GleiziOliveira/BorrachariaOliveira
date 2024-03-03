"use client"
import React from "react"
import dynamic from "next/dynamic"

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers")
  },
  { ssr: false }
)

const achievementsList = [
  {
     postfix: "+",
    metric: "Anos de Mercado",
    value: "10",
  },
  {
    prefix: "+/-",
    metric: "Clientes Atendidos ao logo dos Anos",
    value: "1000",
  },
  {
    postfix: "+",
    metric: "Anos de experiência com Borracharia ",
    value: "20",
  },
]

export default function NossosNumeros(){
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-12 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center mt-1 justify-center sm:my-1"
            >
              <h2 className="text-white mt-1 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="pt-BR"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    }
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-textColor text-base">{achievement.metric}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

