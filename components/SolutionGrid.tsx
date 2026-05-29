import type { Solution } from "@/lib/content";

type SolutionGridProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  solutions: Solution[];
  compact?: boolean;
};

export function SolutionGrid({
  eyebrow,
  title,
  intro,
  solutions,
  compact = false,
}: SolutionGridProps) {
  return (
    <section className="section">
      <div className="section-heading">
        {eyebrow && <span className="section-kicker">{eyebrow}</span>}
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      <div className={compact ? "solution-grid solution-grid-compact" : "solution-grid"}>
        {solutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <article className="solution-card" key={solution.title}>
              <span className="icon-badge" aria-hidden="true">
                <Icon size={23} strokeWidth={1.65} />
              </span>
              <h3>{solution.title}</h3>
              {solution.description && <p>{solution.description}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
