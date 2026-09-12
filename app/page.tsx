import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SearchConsole from "@/components/SearchConsole";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Reveal from "@/components/Reveal";
import ScrollFx from "@/components/ScrollFx";
import HeroBreath from "@/components/HeroBreath";
import { Archive, Footer, Instagram, Lab, Skills } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="progress" id="progress" aria-hidden="true" />
      <Background />
      <Header />

      <main className="shell" id="main">
        <Hero />
        <Marquee />
        <SearchConsole />
        <Stats />
        <Experience />
        <Skills />
        <Lab />
        <Archive />
        <Instagram />
        <Footer />
      </main>

      <Reveal />
      <ScrollFx />
      <HeroBreath />
    </>
  );
}
