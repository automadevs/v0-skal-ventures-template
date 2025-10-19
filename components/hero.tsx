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
        <Pill className="mb-6">AUTOMATION SOLUTIONS</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-foreground">
          A gente cuida do <br />
          <i className="font-light text-primary">sistema</i>
        </h1>
        <p className="font-sans text-sm sm:text-base text-balance mt-8 max-w-[500px] mx-auto text-[rgba(235,229,229,1)]">
          você foca no que importa
        </p>

        <Link
          className="contents max-sm:hidden"
          href="https://wa.me/5538998056501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            [ENTRE EM CONTATO]
          </Button>
        </Link>
        <Link
          className="contents sm:hidden"
          href="https://wa.me/5538998056501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [ENTRE EM CONTATO]
          </Button>
        </Link>
      </div>
    </div>
  )
}
