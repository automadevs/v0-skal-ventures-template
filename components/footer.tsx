"use client"

import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="relative bg-sidebar-primary border-t border-foreground/10">
      <div className="px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Automa Column */}
            <div>
              <Logo className="w-[100px] mb-4 text-primary" />
              <p className="text-foreground/70 text-sm leading-relaxed">
                A gente cuida do sistema, você foca no que importa.
              </p>
            </div>

            {/* Serviços Column */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#solutions"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Automação RPA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#solutions"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Integração de Sistemas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#solutions"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Workflows Inteligentes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#solutions"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Consultoria
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa Column */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Cases de Sucesso
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato Column */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contato@automa.com.br"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    contato@automa.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5538998056501"
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    (38) 99805-6501
                  </a>
                </li>
                <li className="text-foreground/70 text-sm">
                  Av. Paulista, 1000
                  <br />
                  São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-foreground/50 text-sm">© 2025 Automa. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors duration-300">
                  Privacidade
                </Link>
                <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors duration-300">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
