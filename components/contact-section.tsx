"use client"

import Link from "next/link"
import { Button } from "./ui/button"

export function ContactSection() {
  const whatsappLink = "https://wa.me/5538998056501"
  const instagramLink = "https://instagram.com"
  const telegramLink = "https://telegram.me"
  const emailLink = "mailto:contato@automa.com.br"

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-6">Entre em Contato</h2>
        <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>

        <p className="text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
          Pronto para transformar seu negócio? Fale com a gente e descubra como podemos ajudar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto">[Falar no WhatsApp]</Button>
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-foreground/10 bg-sidebar-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center text-foreground hover:text-primary"
            title="WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.688 1.694-2.637 3.957-2.637 6.383 0 1.564.32 3.085.94 4.516l-.999 3.648 3.742-.981c1.305.756 2.814 1.176 4.514 1.176h.004c5.104 0 9.26-4.156 9.26-9.26 0-2.064-.443-4.021-1.313-5.851-.870-1.83-2.108-3.461-3.651-4.693-1.537-1.234-3.322-2.15-5.157-2.62-.52-.134-1.046-.2-1.578-.2z" />
            </svg>
          </Link>

          <Link
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-foreground/10 bg-sidebar-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center text-foreground hover:text-primary"
            title="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
            </svg>
          </Link>

          <Link
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-foreground/10 bg-sidebar-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center text-foreground hover:text-primary"
            title="Telegram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.042 0-.084 0-.126-.01l.214-3.03 5.514-4.98c.24-.213-.052-.328-.373-.115L6.765 13.47l-2.99-.924c-.65-.207-.658-.65.135-.968l11.697-4.514c.54-.203 1.01.132.84.957z" />
            </svg>
          </Link>

          <Link
            href={emailLink}
            className="w-12 h-12 rounded-lg border border-foreground/10 bg-sidebar-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center text-foreground hover:text-primary"
            title="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
