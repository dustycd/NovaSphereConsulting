import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: "corporate" | "food";
};

export function Hero({
  eyebrow,
  title,
  description,
  image,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tone = "corporate",
}: HeroProps) {
  const style = { "--hero-image": `url(${image})` } as CSSProperties;

  return (
    <section className={`hero hero-${tone}`} style={style}>
      <div className="hero-content">
        <span className="section-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-dark" href={primaryHref}>
            <span>{primaryLabel}</span>
            <ArrowRight size={17} strokeWidth={1.8} />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link className="text-link" href={secondaryHref}>
              <span>{secondaryLabel}</span>
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
