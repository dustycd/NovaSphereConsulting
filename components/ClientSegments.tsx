import { ArrowRight } from "lucide-react";
import { fnbClientSegments } from "@/lib/content";

export function ClientSegments() {
  return (
    <section className="client-strip" aria-label="Companies worked with">
      <span>Companies worked with</span>
      <div>
        {fnbClientSegments.map((segment) => {
          const Icon = segment.icon;

          return (
            <article key={segment.label}>
              <Icon size={18} strokeWidth={1.7} />
              <strong>{segment.label}</strong>
              <ArrowRight size={14} strokeWidth={1.7} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
