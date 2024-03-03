import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto px-4 py-2 lg:flex lg:items-center lg:justify-between">
        <Link href={"/"} className="flex-shrink-0">
          <Image
            src="./imagens/logo.svg"
            alt="Bootstrap Logo"
            width={150}
            height={150}
            className="me-2 ml-1"
          />
        </Link>
        <p className="text-center lg:text-left lg:mt-0 text-sm lg:text-base text-slate-600">
          ©2024 BorrachariaOliveira. <br />
          <strong>Todos os direitos reservados.</strong>
        </p>
        <Link href="https://github.com/GleiziOliveira">
          <p className="text-center lg:text-left lg:mt-0 text-sm lg:text-base text-[#414141]">
            <strong>G.K.</strong>
          </p>
        </Link>
      </div>
    </footer>
  )
}

