import Link from "next/link";

type LogoProps = {
  href?: string;
  compact?: boolean;
};

export function Logo({ href = "/", compact = false }: LogoProps) {
  return (
    <Link className="logo" href={href} aria-label="NovaSphereConsulting home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 72 72" role="presentation">
          <path d="M58 11C41 8 23 17 14 33C6 47 8 60 19 65" />
          <path d="M53 8C35 10 18 22 10 39C5 50 7 60 17 66" />
          <path d="M45 8C29 13 15 26 9 43C5 54 9 63 20 68" />
          <path d="M36 10C23 17 13 31 10 46C8 57 14 65 26 68" />
          <path d="M27 15C17 24 12 37 13 50C15 60 23 67 34 68" />
          <path d="M19 23C13 34 13 47 18 57C23 65 32 69 44 67" />
        </svg>
      </span>
      {!compact && (
        <span className="logo-copy">
          <span className="logo-title">NovaSphere</span>
          <span className="logo-subtitle">Consulting</span>
        </span>
      )}
    </Link>
  );
}
