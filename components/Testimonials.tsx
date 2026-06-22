"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import { Icon } from "./Icon";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (dir: number) =>
    setI((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <div className="mb-5 flex justify-center gap-1 text-lime">
        {Array.from({ length: 5 }).map((_, k) => (
          <Icon key={k} name="star" size={20} className="fill-current" />
        ))}
      </div>

      <blockquote className="text-2xl font-medium leading-snug text-fg sm:text-3xl">
        “{t.quote}”
      </blockquote>

      <div className="mt-6 text-sm text-muted">
        <span className="font-medium text-fg">{t.name}</span> · {t.role}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-lime/50 hover:text-lime"
        >
          <Icon name="arrow" size={18} className="rotate-180" />
        </button>
        <div className="flex gap-1.5">
          {testimonials.map((_, k) => (
            <button
              key={k}
              type="button"
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-6 bg-lime" : "w-2 bg-border-strong"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-lime/50 hover:text-lime"
        >
          <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}
