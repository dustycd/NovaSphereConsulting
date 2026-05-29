import type { Solution } from "@/lib/content";

type ServiceIntroProps = {
  title: string;
  body: string;
  items: Solution[];
};

export function ServiceIntro({ title, body, items }: ServiceIntroProps) {
  return (
    <section className="service-intro">
      <div>
        <span className="section-kicker">Advisory focus</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="focus-list">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title}>
              <span className="icon-badge" aria-hidden="true">
                <Icon size={22} strokeWidth={1.65} />
              </span>
              <div>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
