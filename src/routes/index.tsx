import { createFileRoute } from "@tanstack/react-router";

import warehouse from "@/assets/warehouse.jpg";
import btlLogo from "@/assets/btl-logo-new.png.asset.json";
import muellerLogo from "@/assets/mueller.png.asset.json";
import osterLogo from "@/assets/oster.png.asset.json";
import whirlpoolLogo from "@/assets/whirlpool.png.asset.json";
import panasonicLogo from "@/assets/panasonic-new.jpg.asset.json";
import electroluxLogo from "@/assets/electrolux.png.asset.json";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

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
          className="btn-glass hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider md:inline-flex"
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
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-background"
    >
      {/* subtle radial accent */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Frota ativa · cobertura nacional
          </div>

          <TextEffect
            as="h1"
            per="word"
            preset="blur"
            delay={0.1}
            className="font-display text-4xl leading-[1.05] tracking-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Sua carga no destino, sem surpresas.
          </TextEffect>

          <TextEffect
            as="p"
            per="word"
            preset="fade"
            delay={0.5}
            className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl"
          >
            Especialistas em linha branca e bazar. Frota própria, equipe treinada e rastreamento em tempo real — do embarque à entrega.
          </TextEffect>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s", animationFillMode: "both", opacity: 0 }}>
            <a
              href="#contato"
              className="btn-glass group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider"
            >
              Solicitar cotação
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary backdrop-blur transition hover:border-primary hover:bg-primary/10"
            >
              Nossos serviços
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
            {[
              ["15+", "anos de estrada"],
              ["98%", "no prazo"],
              ["27", "estados"],
              ["24/7", "monitoramento"],
            ].map(([k, v], i) => (
              <div
                key={v}
                className="animate-fade-up bg-card/80 px-5 py-5 backdrop-blur"
                style={{ animationDelay: `${0.8 + i * 0.08}s`, animationFillMode: "both", opacity: 0 }}
              >
                <dt className="font-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
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
    { src: muellerLogo.url, alt: "Mueller" },
    { src: osterLogo.url, alt: "Oster" },
    { src: whirlpoolLogo.url, alt: "Whirlpool" },
    { src: panasonicLogo.url, alt: "Panasonic" },
    { src: electroluxLogo.url, alt: "Electrolux" },
  ];
  const loop = [...logos, ...logos, ...logos];
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
      <div className="group relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-16 px-8 group-hover:[animation-play-state:paused] md:gap-24">
          {loop.map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto shrink-0 object-contain transition hover:scale-105 md:h-14"
              loading="lazy"
            />
          ))}
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
    { icon: MapPin, title: "Rastreio em tempo real", desc: "Você acompanha cada quilômetro da sua carga." },
  ];
  return (
    <section id="diferenciais" className="bg-secondary text-foreground">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative">
          <img
            src={warehouse}
            alt="Galpão da BTL Transportes com linha branca e bazar"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            loading="lazy"
            width={1600}
            height={1100}
          />
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Por que a BTL
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Logística pensada para <span className="text-primary italic">carga delicada.</span>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Linha branca e bazar pedem cuidado redobrado. Cada motorista, ajudante e operador passa por treinamento contínuo — porque uma entrega bem feita começa muito antes do caminhão sair do pátio.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="flex gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-primary/40 hover:shadow-elegant">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
            Do Oiapoque ao Chuí, <span className="text-primary italic">sem perder o ritmo.</span>
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
    <section id="contato" className="relative isolate overflow-hidden bg-background py-24 text-foreground md:py-32">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Fale com a gente
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Pronto para <span className="text-primary italic">embarcar</span> sua carga?
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Conte o que você precisa transportar, de onde para onde, e a gente monta a melhor solução. Resposta em até 2 horas em dias úteis.
          </p>
          <div className="mt-10 space-y-4">
            <a href="tel:+551140028922" className="flex items-center gap-4 text-lg transition hover:text-primary">
              <Phone className="h-5 w-5 text-primary" />
              (11) 4002-8922
            </a>
            <a href="mailto:comercial@btltransportes.com.br" className="flex items-center gap-4 text-lg transition hover:text-primary">
              <Mail className="h-5 w-5 text-primary" />
              comercial@btltransportes.com.br
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              Atendimento em todo o Brasil
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const body = `Olá, sou ${data.get("nome")}.%0A%0AOrigem: ${data.get("origem")}%0ADestino: ${data.get("destino")}%0ACarga: ${data.get("carga")}%0A%0AContato: ${data.get("contato")}`;
            window.location.href = `mailto:comercial@btltransportes.com.br?subject=Cotação BTL&body=${body}`;
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10"
        >
          <h3 className="font-display text-2xl tracking-wide">Solicitar cotação</h3>
          <div className="mt-6 grid gap-4">
            <Field name="nome" label="Seu nome" required />
            <Field name="contato" label="E-mail ou telefone" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="origem" label="Origem" required />
              <Field name="destino" label="Destino" required />
            </div>
            <Field name="carga" label="Descrição da carga" textarea />
            <button
              type="submit"
              className="btn-glass mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wider"
            >
              Enviar cotação <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, required, textarea }: { name: string; label: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} className={cls} />
      ) : (
        <input name={name} required={required} className={cls} />
      )}
    </label>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-secondary">
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={btlLogo.url} alt="BTL Transportes" className="h-14 w-14 object-contain" loading="lazy" />
            <div>
              <div className="font-display text-xl tracking-wider text-foreground">BTL Transportes</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Transportes e Armazenagem</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Especialistas em linha branca e bazar. Sua carga tratada com o mesmo cuidado de quem a fabricou.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Serviços</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicos" className="transition hover:text-primary">Linha Branca</a></li>
            <li><a href="#servicos" className="transition hover:text-primary">Bazar & Utilidades</a></li>
            <li><a href="#servicos" className="transition hover:text-primary">Armazenagem</a></li>
            <li><a href="#servicos" className="transition hover:text-primary">Distribuição Nacional</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#diferenciais" className="transition hover:text-primary">Diferenciais</a></li>
            <li><a href="#cobertura" className="transition hover:text-primary">Cobertura</a></li>
            <li><a href="#filiais" className="transition hover:text-primary">Filiais</a></li>
            <li><a href="#contato" className="transition hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Fale com a gente</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (11) 4002-8922</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> comercial@btltransportes.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Atendimento em todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {year} BTL Transportes e Armazenagem. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.25em]">CNPJ · ANTT · Carga Segurada</p>
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

        <div className="relative mt-16 flex min-h-screen w-full items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-20 shadow-elegant">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_70%)]" />
          <TextEffect
            as="h3"
            per="word"
            preset="blur"
            className="text-center font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Sua carga no destino, sem surpresas.
          </TextEffect>
        </div>

        <div className="mt-10 group relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-elegant transition hover:shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Nossa localização
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Mapa ao vivo</span>
          </div>
          <iframe
            title="Mapa BTL Transportes"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-73.99%2C-33.75%2C-34.79%2C5.27&layer=mapnik"
            loading="lazy"
            className="aspect-[4/3] w-full bg-secondary"
            style={{ border: 0 }}
          />
          <a
            href="https://www.openstreetmap.org/?mlat=-14.235&mlon=-51.9253#map=4/-14.24/-51.93"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground transition hover:text-primary"
          >
            Ver no mapa completo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

