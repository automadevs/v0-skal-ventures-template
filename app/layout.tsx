import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Automa — Automação e Desenvolvimento Inteligente",
  description:
    "Automatizamos processos, criamos sistemas e desenvolvemos soluções digitais para criadores e empresas. A gente cuida do sistema, você foca no que importa.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistMono.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  )
}
