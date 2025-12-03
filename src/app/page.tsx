import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Used from "@/components/sections/Used";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Products />
      <Services />
      <Used />
      <Contact />
    </div>
  );
}
