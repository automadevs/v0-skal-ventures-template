'use client'

import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";
import { Leva } from "leva";

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
