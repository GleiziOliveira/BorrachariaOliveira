import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-semibold leading-7 mb-3 text-indigo-600">
                  Entre em contato com a gente!
                </h2>
                <p className="mt-2 py-2 text-xl font-mediun tracking-tight text-gray-900 sm:text-1xl">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="#ffb833"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#ffb833"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Endereço: Rua: Germano Hansen, 195, Jardim Paulistano -
                  Americana/SP
                </p>
                <p className="mt-1 text-lg leading-8 text-gray-600">
                  <strong>Horário de Atendimento </strong>
                </p>
                <p className="mt-1 text-lg leading-8 text-gray-600">
                  De Segunda a Sexta das 8h as 18h
                </p>
                <p className="mt-1 text-lg leading-8 text-gray-600">
                  Sábado das 08h as 12h
                </p>
                <p className="mt-1 text-lg leading-8 text-gray-600">
                  Domingos e Feriados estamos fechados
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9"></div>
                </dl>
                <div>
                  <Link href="https://api.whatsapp.com/send/?phone=5519991988706&text&type=phone_number&app_absent=0"
                    className="px-6 inline-block py-3 w-full sm:w-fit
                    rounded-full mr-4 border-2 border-slate-200 text-textColor
                    hover:text-colorHover hover:border-colorHover"> Entre em
                    Contato
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96 lg:h-auto">
              <a
                href="https://maps.app.goo.gl/HYyYyCGedGqSxRXL9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/imagens/MAPS.PNG"
                  alt="Google Maps onde mostra a Borracharia"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
