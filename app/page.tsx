import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="how_hilink_work">
        <Camp />
      </section>
       <Guide />
      <section id="services">
        <Features />
      </section>
      <section id="pricing">
        <GetApp />
      </section>

      <section id="contact_us">
       <Contact/>
      </section>
    </>
  );
}
