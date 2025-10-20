"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

const GL = dynamic(() => import("./gl").then(mod => ({ default: mod.GL })), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
})

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between pt-24">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-10">
        <Pill className="mb-6">SOLUÇÕES DIGITAIS</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-foreground">
          Transformamos ideias em <br />
          <i className="font-light text-primary">sistemas que trabalham</i>
        </h1>
        <p className="font-sans text-sm sm:text-base text-balance mt-8 max-w-[600px] mx-auto text-[rgba(235,229,229,1)]">
          Soluções digitais, automações e sistemas feitos sob medida para criadores e empresas que querem ir além.
        </p>

        <Link
          className="contents max-sm:hidden"
          href="https://wa.me/5538998056501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            [FALAR COM A AUTOMA]
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
            [FALAR COM A AUTOMA]
          </Button>
        </Link>
      </div>
    </div>
  )
}
