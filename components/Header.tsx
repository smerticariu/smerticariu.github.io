"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./ui";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/download" variant="secondary" size="md" icon="download">
            Download
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-fg lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "sparkle" : "arrow"} size={20} className={open ? "" : "rotate-90"} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg/95 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              <Button href="/download" size="md" icon="download" className="w-full">
                Download
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
