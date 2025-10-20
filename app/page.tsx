'use client'

import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

const Leva = dynamic(() => import("leva").then(mod => ({ default: mod.Leva })), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <ProjectsSection />
      <Footer />
      <Leva hidden />
    </>
  );
}
