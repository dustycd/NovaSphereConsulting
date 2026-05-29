import type { Stat } from "@/lib/content";

type StatsBandProps = {
  stats: Stat[];
  quote?: string;
  eyebrow?: string;
};

export function StatsBand({ stats, quote, eyebrow }: StatsBandProps) {
  return (
    <section className="stats-band" aria-label={eyebrow ?? "Key statistics"}>
      {quote && (
        <div className="stats-quote">
          <span aria-hidden="true">"</span>
          <p>{quote}</p>
        </div>
      )}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={`${stat.value}-${stat.label}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            {stat.detail && <small>{stat.detail}</small>}
          </div>
        ))}
      </div>
    </section>
  );
}
