import { ClientSegments } from "@/components/ClientSegments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SolutionGrid } from "@/components/SolutionGrid";
import { StatsBand } from "@/components/StatsBand";
import { fnbSolutions, fnbStats } from "@/lib/content";

export default function FoodAndBeverageConsultingPage() {
  return (
    <main className="site-frame">
      <Header />
      <Hero
        eyebrow="Food & Beverage Consulting"
        title={
          <>
            Helping food & beverage brands thrive in a changing world.
          </>
        }
        description="From strategy to execution, we help you innovate, optimize operations, and win in the market."
        image="/images/fnb-hero.png"
        primaryHref="mailto:hello@novasphereconsulting.com"
        primaryLabel="Explore F&B Consulting"
        secondaryHref="/"
        secondaryLabel="Learn more"
        tone="food"
      />
      <ClientSegments />
      <StatsBand
        stats={fnbStats}
        quote="We turn food business challenges into opportunities, and ideas into measurable results."
      />
      <SolutionGrid
        eyebrow="Solutions"
        title="Food and beverage consulting solutions"
        intro="Hands-on guidance for restaurant concepts, menu strategy, procurement, workflow, cost control, inventory, expansion, launch, and growth."
        solutions={fnbSolutions}
        compact
      />
      <Footer />
    </main>
  );
}
