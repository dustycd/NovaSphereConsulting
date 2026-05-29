import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { serviceNavLinks } from "@/lib/content";
import { Logo } from "./Logo";

export function Header() {
  return (
    <>
      <header className="site-header">
        <Logo />
        <nav className="site-nav" aria-label="Primary navigation">
          {serviceNavLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <Link className="button button-dark fixed-contact" href="mailto:hello@novasphereconsulting.com">
        <span>Contact Us</span>
        <ArrowRight size={17} strokeWidth={1.8} />
      </Link>
    </>
  );
}
