"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between pt-24">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-10">
        <Pill className="mb-6">AUTOMAÇÃO INTELIGENTE</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-foreground">
          Transformamos ideias <br />
          <i className="font-light text-primary">em sistemas que trabalham por você</i>
        </h1>
        <p className="font-sans text-sm sm:text-base text-balance mt-8 max-w-[600px] mx-auto text-[rgba(235,229,229,1)]">
          Soluções digitais, automações e sistemas feitos sob medida para criadores e empresas que querem ir além.
        </p>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            [Falar com a Automa]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#contact">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Falar com a Automa]
          </Button>
        </Link>
      </div>
    </div>
  )
}
