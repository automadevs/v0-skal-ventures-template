"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { Projects } from "@/components/projects"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Projects />
      <ContactSection />
      <Footer />
      <Leva hidden />
    </>
  )
}
