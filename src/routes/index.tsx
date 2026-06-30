import { createFileRoute } from "@tanstack/react-router";
import { SatelliteBrazilMap } from "@/components/ui/satellite-brazil-map";

import warehouse from "@/assets/warehouse-premium.jpg";
import heroVideo from "@/assets/hero-truck.mp4.asset.json";
import heroVideoMobile from "@/assets/hero-truck-mobile.mp4.asset.json";
import btlLogo from "@/assets/btl-logo-new.png.asset.json";
import btlFooterLogo from "@/assets/btl-footer-logo.png.asset.json";

import muellerLogo from "@/assets/mueller.png.asset.json";
import osterLogo from "@/assets/oster.png.asset.json";
import whirlpoolLogo from "@/assets/whirlpool.png.asset.json";
import philipsLogo from "@/assets/philips.png.asset.json";
import electroluxLogo from "@/assets/electrolux.png.asset.json";
import geloparLogo from "@/assets/gelopar.png.asset.json";
import colormaqLogo from "@/assets/colormaq.png.asset.json";

import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { ContactCard } from "@/components/ui/contact-card";

import { TextEffect } from "@/components/ui/text-effect";
import {
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  PackageCheck,
  Refrigerator,
  ShoppingBag,
  Boxes,
  Route as RouteIcon,
  Target,
  Mountain,
  Telescope,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BTL Transportes — Linha branca e bazar com segurança" },
      { name: "description", content: "Transportadora especializada em linha branca e bazar. Frota própria, rastreamento em tempo real e cobertura nacional." },
      { property: "og:title", content: "BTL Transportes — Linha branca e bazar" },
      { property: "og:description", content: "Frota própria, rastreamento e cobertura nacional para sua carga." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Partners />
      <Services />
      <WhyUs />
      <Essence />
      <Coverage />
      <BrazilFiliais />
      <Cta />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={btlLogo.url} alt="BTL Transportes e Armazenagem" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wider text-primary">BTL TRANSPORTES</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Transportes e Armazenagem</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          <a href="#servicos" className="transition hover:text-primary">Serviços</a>
          <a href="#diferenciais" className="transition hover:text-primary">Diferenciais</a>
          <a href="#cobertura" className="transition hover:text-primary">Cobertura</a>
          <a href="#contato" className="transition hover:text-primary">Contato</a>
        </nav>
        <a
          href="#contato"
          className="btn-primary-shine hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider md:inline-flex"
        >
          Solicitar cotação <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* full-bleed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover md:hidden"
      >
        <source src={heroVideoMobile.url} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 hidden h-full w-full object-cover md:block"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      {/* readability overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-40 md:pb-32">
        <TextEffect
          as="h1"
          per="word"
          preset="blur"
          delay={0.1}
          className="font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sua carga no destino, sem surpresas.
        </TextEffect>

        <TextEffect
          as="p"
          per="word"
          preset="fade"
          delay={0.5}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Especialistas em linha branca e bazar. Frota própria, equipe treinada e rastreamento em tempo real — do embarque à entrega.
        </TextEffect>

        <div
          className="mt-10 flex items-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.9s", animationFillMode: "both", opacity: 0 }}
        >
          <a
            href="#contato"
            className="btn-primary-shine inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
          >
            Solicitar cotação
          </a>
          <a
            href="#servicos"
            aria-label="Ver serviços"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}


function Marquee() {
  const items = [
    "Geladeiras", "Fogões", "Máquinas de lavar", "Micro-ondas", "Utensílios domésticos",
    "Eletroportáteis", "Bazar", "Pequenos eletros", "Linha branca",
  ];
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-6">
      <div className="flex w-[200%] animate-marquee gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-3 font-display text-2xl tracking-wider text-primary/80">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  const logos = [
    { src: whirlpoolLogo.url, alt: "Whirlpool" },
    { src: electroluxLogo.url, alt: "Electrolux" },
    { src: philipsLogo.url, alt: "Philips" },
    
    { src: colormaqLogo.url, alt: "Colormaq" },
    { src: geloparLogo.url, alt: "Gelopar" },
    { src: muellerLogo.url, alt: "Mueller" },
    { src: osterLogo.url, alt: "Oster" },
  ];
  const Track = () => (
    <div className="flex shrink-0 items-center gap-8 pr-8 md:gap-24 md:pr-24">
      {logos.map((logo, i) => (
        <img
          key={`${logo.alt}-${i}`}
          src={logo.src}
          alt={logo.alt}
          className="h-8 w-auto shrink-0 object-contain transition hover:scale-105 md:h-14"
          loading="lazy"
        />
      ))}
    </div>
  );
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Indústrias que confiam
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Parceiros de estrada
          </h2>
        </div>
      </div>

      {/* infinite marquee */}
      <div className="group relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

        <div className="flex w-max animate-marquee [will-change:transform] [transform:translateZ(0)] group-hover:[animation-play-state:paused]">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Refrigerator,
      title: "Linha Branca",
      desc: "Geladeiras, fogões, máquinas de lavar, freezers. Manuseio especializado e embalagens reforçadas para zero avaria.",
    },
    {
      icon: ShoppingBag,
      title: "Bazar & Utilidades",
      desc: "Utensílios, organizadores, decoração e itens de papelaria. Cargas fracionadas com agilidade.",
    },
    {
      icon: Boxes,
      title: "Armazenagem",
      desc: "Galpões próprios com controle de inventário, picking e cross-docking para distribuição imediata.",
    },
    {
      icon: RouteIcon,
      title: "Distribuição Nacional",
      desc: "Rotas otimizadas e malha logística que cobre as cinco regiões com previsibilidade de prazos.",
    },
  ];
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            O que transportamos
          </div>
          <h2 className="font-display text-5xl tracking-wide text-foreground md:text-6xl">
            Carga certa, <span className="text-primary italic">manuseio certo.</span>
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Cada categoria tem suas exigências. Treinamos nossa equipe e equipamos nossa frota para cada uma delas.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="group flex flex-col gap-4 bg-card p-8 transition hover:bg-primary hover:text-primary-foreground">
            <s.icon className="h-10 w-10 text-primary transition group-hover:text-primary-foreground group-hover:scale-110" strokeWidth={1.5} />
            <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground transition group-hover:text-primary-foreground/80">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Carga 100% segurada", desc: "Cobertura completa do embarque à entrega." },
    { icon: PackageCheck, title: "Zero avaria", desc: "Embalagens, amarração e manuseio especializado." },
    { icon: Clock, title: "Prazo cumprido", desc: "98% das entregas dentro do prazo combinado." },
    { icon: MapPin, title: "Rastreio em tempo real", desc: "Acompanhe cada quilômetro da sua carga." },
  ];
  const stats = [
    { value: "98%", label: "Entregas no prazo" },
    { value: "15+", label: "Anos de estrada" },
    { value: "100%", label: "Carga segurada" },
    { value: "24/7", label: "Rastreio ativo" },
  ];
  return (
    <section id="diferenciais" className="relative bg-background text-foreground">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Image side — full bleed, no card */}
        <div className="relative h-[60vh] min-h-[460px] w-full lg:h-auto lg:min-h-[760px]">
          <img
            src={warehouse}
            alt="Galpão BTL com linha branca paletizada e organizada"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/95" />
          {/* Floating label */}
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur md:left-10 md:top-10">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Operação BTL
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
            Por que a BTL
          </div>
          <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
            Logística pensada
            <br />
            para <span className="text-primary italic">carga delicada.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Linha branca e bazar pedem cuidado redobrado. Cada motorista, ajudante e operador passa por treinamento contínuo — porque uma entrega bem feita começa muito antes do caminhão sair do pátio.
          </p>

          {/* Differentiators as clean list */}
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {items.map((it) => (
              <li key={it.title} className="group flex items-start gap-5 py-5 transition hover:bg-muted/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg leading-snug tracking-tight">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl tracking-tight text-foreground md:text-4xl">{s.value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Essence() {
  const pillars = [
    {
      icon: Target,
      title: "Propósito",
      desc: "Existimos para mover o Brasil levando muito mais do que cargas. Levamos oportunidades, desenvolvimento e qualidade de vida, conectando pessoas, empresas e sonhos em cada entrega.",
    },
    {
      icon: Mountain,
      title: "Missão",
      desc: "Conectar pessoas, empresas e sonhos por meio de soluções logísticas seguras, eficientes e humanas, transportando não apenas mercadorias, mas tudo aquilo que transforma a vida das pessoas.",
    },
    {
      icon: Telescope,
      title: "Visão",
      desc: "Construir uma empresa sólida, admirada e perene, referência no transporte rodoviário de cargas, reconhecida pela excelência, pela cultura e pelas pessoas que fazem parte da nossa história.",
    },
  ];
  return (
    <section id="essencia" className="relative bg-background">
      {/* Pillars block */}
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14 text-center">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
            Nossa Essência
          </div>
          <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
            Transportamos muito mais do que <span className="italic text-primary">cargas.</span>
            <br />
            Transportamos <span className="italic text-primary">confiança.</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <p.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-2xl tracking-tight text-primary md:text-3xl">{p.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

function Coverage() {
  const regions = [
    { name: "Sudeste", states: "SP · RJ · MG · ES" },
    { name: "Sul", states: "PR · SC · RS" },
    { name: "Centro-Oeste", states: "GO · MT · MS · DF" },
    { name: "Nordeste", states: "BA · PE · CE · e mais" },
    { name: "Norte", states: "PA · AM · TO · e mais" },
  ];
  return (
    <section id="cobertura" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Cobertura nacional
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            do sul ao norte do brasil, <span className="text-primary italic">sem perder o ritmo.</span>
          </h2>
        </div>
      <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-5">
        {regions.map((r) => (
          <div key={r.name} className="bg-card p-8">
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl tracking-wide">{r.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.states}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-4xl tracking-tight text-primary md:text-5xl lg:text-6xl">
            Preencha e aguarde o nosso contato.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Preencha ou entre em contato via e-mail
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const assunto = data.get("assunto")?.toString() || "Contato";
            const body = `Olá, sou ${data.get("nome")} da empresa ${data.get("empresa")}.%0A%0AAssunto: ${assunto}%0AWhatsApp: ${data.get("whatsapp") || "Não informado"}%0A%0AMensagem:%0A${data.get("mensagem") || ""}`;
            window.location.href = `mailto:comercial@btltransportes.com.br?subject=Contato BTL - ${assunto}&body=${body}`;
          }}
          className="space-y-10"
        >
          {/* Two-column fields */}
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            <UnderlineField name="nome" label="Nome" />
            <UnderlineField name="empresa" label="Empresa" />
            <UnderlineField name="email" label="Email" type="email" required />
            <UnderlineField name="whatsapp" label="WhatsApp" type="tel" />
          </div>

          {/* Bottom row: radios + button */}
          <div className="grid items-end gap-10 md:grid-cols-2">
            {/* Radio group */}
            <fieldset>
              <legend className="mb-4 text-sm font-medium text-primary">
                Selecione uma opção
              </legend>
              <div className="space-y-3">
                {[
                  { value: "orcamentos", label: "Orçamentos" },
                  { value: "frota", label: "Frota" },
                  { value: "mecanica", label: "Mecânica/Manutenção" },
                  { value: "rh", label: "RH" },
                ].map((opt) => (
                  <label key={opt.value} className="flex cursor-pointer items-center gap-3 group">
                    <input
                      type="radio"
                      name="assunto"
                      value={opt.value}
                      defaultChecked={opt.value === "frota"}
                      className="peer sr-only"
                    />
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary/40 transition group-hover:border-primary peer-checked:border-primary">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary opacity-0 transition peer-checked:opacity-100" />
                    </span>
                    <span className="text-sm text-foreground/80 transition group-hover:text-foreground peer-checked:text-foreground peer-checked:font-medium">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Submit button */}
            <button
              type="submit"
              className="btn-primary-shine w-full rounded-sm py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function UnderlineField({
  name,
  label,
  required,
  type = "text",
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="group block">
      <span className="mb-3 block text-sm font-medium text-primary">
        {label}
        {required && <span className="ml-0.5">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-0 border-b-2 border-primary/20 bg-transparent pb-3 text-sm text-foreground outline-none transition focus:border-primary"
      />
    </label>
  );
}


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-black text-white">
      {/* background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover md:hidden"
      >
        <source src={heroVideoMobile.url} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 hidden h-full w-full object-cover md:block"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      {/* dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/75" />
      {/* glass marsala line at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-10 md:gap-12 md:py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-4">
            <img src={btlFooterLogo.url} alt="BTL Transportes" className="h-20 w-20 object-contain md:h-24 md:w-24" loading="lazy" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            Especialistas em linha branca e bazar. Sua carga tratada com o mesmo cuidado de quem a fabricou.
          </p>
        </div>

        <div>
          <h4 className="mb-3 inline-block border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white md:mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#servicos" className="transition hover:text-primary">Linha Branca</a></li>
            <li><a href="#servicos" className="transition hover:text-primary">Bazar & Utilidades</a></li>
            <li><a href="#servicos" className="transition hover:text-primary">Armazenagem</a></li>
            <li><a href="#servicos" className="transition hover:text-primary">Distribuição Nacional</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 inline-block border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white md:mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#diferenciais" className="transition hover:text-primary">Diferenciais</a></li>
            <li><a href="#cobertura" className="transition hover:text-primary">Cobertura</a></li>
            <li><a href="#filiais" className="transition hover:text-primary">Filiais</a></li>
            <li><a href="#contato" className="transition hover:text-primary">Contato</a></li>
            <li><a href="#essencia" className="transition hover:text-primary">Nossos Valores</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 inline-block border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white md:mb-4">Fale com a gente</h4>
          <ul className="space-y-3 text-sm text-white">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-white" /> (11) 4002-8922</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-white" /> comercial@btltransportes.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-white" /> Atendimento em todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-white/70 md:flex-row md:py-6">
          <p>© {year} BTL Transportes e Armazenagem. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.25em]">CNPJ 34.904.898/0003-06 · ANTT · Carga Segurada</p>
        </div>
      </div>

    </footer>
  );
}



// ============================================================================
// Brazil filiais map
// ============================================================================

const FILIAIS: Array<{ city: string; uf: string; lat: number; lng: number; hq?: boolean }> = [
  { city: "São Paulo", uf: "SP", lat: -23.5505, lng: -46.6333, hq: true },
  { city: "Rio de Janeiro", uf: "RJ", lat: -22.9068, lng: -43.1729 },
  { city: "Belo Horizonte", uf: "MG", lat: -19.9167, lng: -43.9345 },
  { city: "Curitiba", uf: "PR", lat: -25.4284, lng: -49.2733 },
  { city: "Porto Alegre", uf: "RS", lat: -30.0346, lng: -51.2177 },
  { city: "Brasília", uf: "DF", lat: -15.7939, lng: -47.8828 },
  { city: "Salvador", uf: "BA", lat: -12.9777, lng: -38.5016 },
  { city: "Recife", uf: "PE", lat: -8.0476, lng: -34.8770 },
  { city: "Fortaleza", uf: "CE", lat: -3.7319, lng: -38.5267 },
  { city: "Manaus", uf: "AM", lat: -3.119, lng: -60.0217 },
];

function BrazilFiliais() {
  const pins = [
    { city: "Jundiaí", uf: "SP", lat: -23.1864, lng: -46.8842, hq: true },
    { city: "Joinville", uf: "SC", lat: -26.3044, lng: -48.8456 },
    { city: "São Marcos", uf: "RS", lat: -28.9687, lng: -51.0490 },
    { city: "Camaçari", uf: "BA", lat: -12.6975, lng: -38.3242 },
    { city: "Alfredo Chaves", uf: "ES", lat: -20.5425, lng: -40.8237 },
  ];
  return (
    <section id="filiais" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Nossas filiais
            <span className="ml-2 inline-block h-px w-8 align-middle bg-primary" />
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Presença <span className="text-primary italic">de norte a sul</span> do Brasil
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Uma rede de filiais estrategicamente posicionadas para entregar mais rápido, com custo justo e total rastreabilidade.
          </p>
        </div>
      </div>

      {/* Mapa satélite full-bleed, responsivo */}
      <div className="relative mt-12 left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
        <div className="relative h-[60vh] min-h-[420px] md:h-[75vh] md:min-h-[600px] w-full overflow-hidden border-y border-border bg-black">
          <SatelliteBrazilMap pins={pins} color="oklch(0.38 0.14 18)" />
        </div>
      </div>
    </section>
  );
}

