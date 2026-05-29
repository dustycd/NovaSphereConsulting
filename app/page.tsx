import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SolutionGrid } from "@/components/SolutionGrid";
import { StatsBand } from "@/components/StatsBand";
import { homeServices, homepageStats } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="site-frame">
      <Header />
      <Hero
        eyebrow="Based in Dubai. Working with international clients."
        title={
          <>
            NovaSphere
            <br />
            Consulting
          </>
        }
        description="Strategic financial advisory and food & beverage consulting for companies that need sharper decisions, stronger operations, and disciplined growth."
        image="/images/home-hero.png"
        primaryHref="/financial-advisory"
        primaryLabel="Explore Financial Advisory"
        secondaryHref="/food-and-beverage-consulting"
        secondaryLabel="Food & Beverage"
      />
      <section className="trust-strip" aria-label="Markets served">
        <span>Working across markets</span>
        <strong>Dubai</strong>
        <strong>GCC</strong>
        <strong>Middle East</strong>
        <strong>Europe</strong>
        <strong>International Clients</strong>
      </section>
      <section className="section split-section" id="about">
        <div className="section-heading">
          <span className="section-kicker">What we do</span>
          <h2>Advisory that connects numbers, operations, and expansion.</h2>
        </div>
        <div className="split-copy">
          <p>
            NovaSphereConsulting helps businesses make practical strategic decisions
            across finance, operations, and growth. We support leadership teams with
            planning, reporting, performance analysis, market entry, business setup,
            restaurant launch, and F&B operational improvement.
          </p>
          <Link className="text-link" href="mailto:hello@novasphereconsulting.com">
            <span>Discuss your project</span>
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
      <SolutionGrid title="How we help" solutions={homeServices} />
      <StatsBand
        stats={homepageStats}
        quote="We combine financial discipline with operational experience to help ambitious companies grow with clarity."
      />
      <section className="testimonial-section" id="insights">
        <div className="testimonial-copy">
          <span className="icon-badge" aria-hidden="true">
            <Quote size={23} strokeWidth={1.65} />
          </span>
          <blockquote>
            NovaSphereConsulting brought structure to our expansion plan and turned
            complex operational decisions into a clear, measurable path forward.
          </blockquote>
          <p>Growth-stage client, Dubai</p>
        </div>
        <div className="testimonial-metrics">
          <div>
            <strong>Clearer</strong>
            <span>financial planning</span>
          </div>
          <div>
            <strong>Lean</strong>
            <span>operating structure</span>
          </div>
          <div>
            <strong>Ready</strong>
            <span>for market growth</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
