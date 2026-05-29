import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>
            Dubai-based advisory for financial clarity, operational performance, and
            international growth.
          </p>
        </div>
        <div className="footer-contact">
          <span className="section-kicker">Email</span>
          <Link className="email-link" href="mailto:hello@novasphereconsulting.com">
            <Mail size={18} strokeWidth={1.8} />
            hello@novasphereconsulting.com
          </Link>
        </div>
        <div className="footer-links">
          <span className="section-kicker">Links</span>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
              <ArrowRight size={14} strokeWidth={1.8} />
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>NovaSphereConsulting</span>
        <span>Based in Dubai. Working with international clients.</span>
      </div>
    </footer>
  );
}
