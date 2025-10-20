'use client'

import Link from 'next/link'
import { Button } from './ui/button'

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: '💬',
    href: 'https://wa.me/5538998056501',
    label: 'WhatsApp'
  },
  {
    name: 'Instagram',
    icon: '📷',
    href: 'https://instagram.com',
    label: 'Instagram'
  },
  {
    name: 'Telegram',
    icon: '✈️',
    href: 'https://telegram.me',
    label: 'Telegram'
  },
  {
    name: 'Email',
    icon: '📧',
    href: 'mailto:contato@automa.com',
    label: 'E-mail'
  }
]

export function Footer() {
  return (
    <footer className="relative w-full py-16 md:py-24 bg-background border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div>
            <h3 className="text-lg font-sentient text-foreground mb-4">Automa</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Automatizações inteligentes e soluções digitais para criadores e empresas que querem ir além.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-4">Navegação</h4>
            <nav className="space-y-2 flex flex-col">
              <Link href="#sobre" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-150">
                Sobre a Automa
              </Link>
              <Link href="#soluções" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-150">
                Soluções
              </Link>
              <Link href="#projetos" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-150">
                Projetos
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-4">Contato Rápido</h4>
            <p className="text-foreground/60 text-sm mb-4">
              Pronto para transformar sua ideia em realidade?
            </p>
            <Link
              href="https://wa.me/5538998056501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">
                [FALAR COM A AUTOMA]
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-foreground/60">
                © 2024 Automa. Todos os direitos reservados.
              </p>
              <p className="text-xs text-foreground/40">
                Desenvolvido com inteligência automatizada.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-none border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 ease-out"
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
