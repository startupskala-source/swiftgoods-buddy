import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  className?: string;
};

interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  infos: ContactInfo[];
  children?: React.ReactNode;
}

function CornerPlus({ className }: { className?: string }) {
  return (
    <span
      className={cn("pointer-events-none absolute h-4 w-4 text-white/70", className)}
      aria-hidden
    >
      <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
      <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
    </span>
  );
}

export function ContactCard({
  title = "Fale com a gente",
  description = "Tem dúvidas sobre nossos serviços ou precisa de uma cotação? Preencha o formulário ao lado. Respondemos em até 1 dia útil.",
  infos,
  children,
  className,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 p-8 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:p-14",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(135deg, color-mix(in oklab, var(--primary) 65%, transparent) 0%, color-mix(in oklab, var(--primary) 25%, transparent) 35%, rgba(0,0,0,0.75) 100%)",
      }}
      {...props}
    >
      {/* gloss highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-1/3 -top-1/3 h-2/3 w-2/3 rounded-full opacity-40 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--primary) 55%, transparent)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-2/3 w-2/3 rounded-full bg-black/60 opacity-60 blur-3xl"
      />

      <CornerPlus className="-left-2 -top-2" />
      <CornerPlus className="-right-2 -top-2" />
      <CornerPlus className="-bottom-2 -left-2" />
      <CornerPlus className="-bottom-2 -right-2" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="md:border-r md:border-white/10 md:pr-12">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400">
            {description}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {infos.map((info) => {
              const Icon = info.icon;
              const Inner = (
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{info.label}</div>
                    <div className="truncate text-sm text-neutral-400">{info.value}</div>
                  </div>
                </div>
              );
              return (
                <div key={info.label} className={info.className}>
                  {info.href ? (
                    <a href={info.href} className="block transition hover:opacity-80">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
