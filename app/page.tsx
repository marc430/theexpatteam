import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Differentiators from "@/components/Differentiators";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Differentiators />
      <WhoWeWorkWith />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
