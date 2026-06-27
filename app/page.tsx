import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Pointer-driven flourishes are client-only and non-critical → load lazily.
const MouseGlow = dynamic(() => import("@/components/ui/MouseGlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Loader />
      <MouseGlow />
      <AuroraBackground />

      <SmoothScroll>
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <TechStack />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
