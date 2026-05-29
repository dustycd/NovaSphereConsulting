import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceIntro } from "@/components/ServiceIntro";
import { SolutionGrid } from "@/components/SolutionGrid";
import { StatsBand } from "@/components/StatsBand";
import { financialFocus, financialSolutions, financialStats } from "@/lib/content";

export default function FinancialAdvisoryPage() {
  return (
    <main className="site-frame">
      <Header />
      <Hero
        eyebrow="Financial Advisory"
        title={
          <>
            Clarity <em>today.</em>
            <br />
            Confidence <em>tomorrow.</em>
          </>
        }
        description="Strategic financial advice that drives performance, manages risk, and creates long-term value."
        image="/images/financial-hero.png"
        primaryHref="mailto:hello@novasphereconsulting.com"
        primaryLabel="Book a Consultation"
        secondaryHref="/"
        secondaryLabel="Learn more"
      />
      <section className="trust-strip" aria-label="Financial advisory focus areas">
        <span>Built for ambitious organizations</span>
        <strong>Planning</strong>
        <strong>Reporting</strong>
        <strong>Profitability</strong>
        <strong>Growth</strong>
        <strong>Controls</strong>
      </section>
      <ServiceIntro
        title="Financial structure for companies that need dependable decisions."
        body="We help leadership teams build the financial visibility, cash discipline, reporting habits, and performance routines needed to operate with confidence."
        items={financialFocus}
      />
      <StatsBand
        stats={financialStats}
        quote="We combine deep financial expertise with strategic thinking to help you make better decisions, faster."
      />
      <SolutionGrid
        eyebrow="Solutions"
        title="Financial advisory solutions"
        intro="Focused support across planning, reporting, profitability, setup, market entry, performance, investment, and long-term stability."
        solutions={financialSolutions}
        compact
      />
      <Footer />
    </main>
  );
}
