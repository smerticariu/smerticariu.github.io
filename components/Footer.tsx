import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="mt-4 text-xs text-faint">{site.requirements}</p>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-lime"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Sergiu Merticariu · Battery Guard. All rights reserved.</p>
          <p>
            Made for macOS · Everything computed on-device ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-lime">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
