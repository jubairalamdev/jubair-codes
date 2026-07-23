import Container from "@/components/shared/Container";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <Container className="flex flex-col gap-6 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Hero />
        </div>
        <About />
      </div>

      <Experience />
      <Skills />
    </Container>
  );
}
