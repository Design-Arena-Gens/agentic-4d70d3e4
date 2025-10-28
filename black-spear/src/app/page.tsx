export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,164,100,0.24),_transparent_55%)]" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <header className="flex flex-col gap-12 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-400">
              The Black Spear Agency
            </span>
            <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
              Architects of Legacy Experiences in Global Sport & Luxury Travel
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-300 lg:text-base">
            African-led. Globally revered. We engineer tailored journeys that
            fuse cultural authenticity, elite access, and operational precision
            for the world’s most discerning athletes, investors, and partners.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_transparent)]" />
            <div className="relative flex flex-col gap-6">
              <p className="max-w-xl text-lg leading-relaxed text-zinc-200">
                From the Olympics to AFCON, Formula 1 to Rugby World Cup, Black
                Spear builds end-to-end concierge frameworks that respect legacy
                and deliver measurable ROI. Every itinerary is a strategic
                narrative honoring the African diaspora while commanding global
                luxury standards.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    label: "Year 1 Revenue Goal",
                    value: "~$45M USD / R860M ZAR",
                  },
                  { label: "Target ROI", value: "25–40% Across Six Tiers" },
                  {
                    label: "Mega-Event Coverage",
                    value: "Olympics, AFCON, F1, Rugby World Cup",
                  },
                  {
                    label: "Partnership Focus",
                    value:
                      "Airlines · Luxury Hotels · Premium Spirits · Watchmakers · Private Banks",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      {item.label}
                    </span>
                    <p className="mt-3 text-lg text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-8 rounded-3xl border border-white/10 bg-black/60 p-10">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500">
                Market Positioning
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-200">
                Premium enough for ultra-high-net-worth clients, culturally
                resonant for the diaspora, and operationally sophisticated to
                earn institutional trust. Black Spear is the first concierge
                platform to unify these worlds at scale.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "African cultural capital as a differentiator.",
                "Global concierge network spanning aviation, hospitality, and sport.",
                "Proprietary event intelligence that transforms access into legacy.",
              ].map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Six-Tier Architecture
              </h2>
              <p className="mt-3 text-2xl font-light text-white">
                Scalable programs tailoring access for every echelon of the
                African sporting economy.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-amber-300">
              Precision. Reverence. Repeatability.
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Tier I · Vanguard",
                focus:
                  "Emerging professionals securing first exposure to global sport.",
                promise: "Curated group immersions and mentorship access.",
              },
              {
                name: "Tier II · Ambition",
                focus:
                  "Rising executives and athletes formalizing their global footprint.",
                promise: "Bespoke travel design and brand alignment strategy.",
              },
              {
                name: "Tier III · Prestige",
                focus:
                  "Growth-stage entrepreneurs and angel syndicates seeking deal flow.",
                promise: "Boardroom-to-box hospitality with curated investor salons.",
              },
              {
                name: "Tier IV · Sovereign",
                focus: "Family offices and sovereign wealth delegations.",
                promise:
                  "Closed-door summits, heritage storytelling, discreet security.",
              },
              {
                name: "Tier V · Icon",
                focus:
                  "Cultural icons, sports legends, and global tastemakers.",
                promise:
                  "Narrative-led experiences aligning brand, philanthropy, and legacy.",
              },
              {
                name: "Tier VI · Apex",
                focus:
                  "UHNW coalitions shaping global sport and infrastructure.",
                promise:
                  "Proprietary access, co-investment platforms, and multi-year retainers.",
              },
            ].map((tier) => (
              <article
                key={tier.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 p-8 transition group-hover:border-amber-400/60"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,164,100,0.6),_transparent_65%)]" />
                </div>
                <div className="relative space-y-4">
                  <h3 className="text-lg font-medium tracking-wide text-white">
                    {tier.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {tier.focus}
                  </p>
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                    {tier.promise}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Competitive Advantage
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              Our advantage is rooted in narrative authority and operational
              mastery. Black Spear is engineered by hospitality strategists,
              cultural historians, and former athletes who understand the stakes
              of legacy.
            </p>
            <ul className="space-y-4 text-sm text-zinc-300">
              {[
                "African-led ownership with multi-continent concierge alliances.",
                "Private aviation desk with direct access to Gulfstream, Bombardier, and Dassault fleets.",
                "Institutional-grade risk management, on-ground security, and ESG reporting.",
                "Story-driven content studios that capture and syndicate each experience.",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/50 p-5"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-black/60 p-8">
            <h3 className="text-sm uppercase tracking-[0.4em] text-zinc-500">
              ESG Commitments
            </h3>
            <div className="grid gap-4">
              {[
                {
                  title: "Youth Sport Scholarships",
                  detail:
                    "Allocating 5% of program fees to elite academies across the continent.",
                },
                {
                  title: "African SME Inclusion",
                  detail:
                    "Mandating 40% supply chain participation from African-owned enterprises.",
                },
                {
                  title: "Women-Led Staffing",
                  detail:
                    "Executive and ground teams maintained at minimum 60% women leadership.",
                },
                {
                  title: "Regenerative Tourism",
                  detail:
                    "Carbon-conscious logistics, wildlife conservation partnerships, and transparent reporting.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-black/70 p-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Partnership Blueprint
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              We secure anchor relationships that sustain premium experiences
              and scale responsibly across continents.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  label: "Airlines",
                  detail:
                    "Strategic alliances with flagship carriers for global lift and bespoke ground services.",
                },
                {
                  label: "Hospitality",
                  detail:
                    "Preferred agreements with luxury hotel groups, safari reserves, and branded residences.",
                },
                {
                  label: "Signature Spirits & Gastronomy",
                  detail:
                    "Immersive dining programs co-created with premium spirits and emerging African chefs.",
                },
                {
                  label: "Luxury Houses & Private Banks",
                  detail:
                    "Co-branded activations, clienteling suites, and curated wealth forums.",
                },
              ].map((partner) => (
                <div
                  key={partner.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    {partner.label}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300">{partner.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-10">
            <h3 className="text-sm uppercase tracking-[0.4em] text-zinc-500">
              Mega-Event Playbook
            </h3>
            <ul className="space-y-5 text-sm text-zinc-300">
              {[
                "Intelligence sprints 18 months pre-event to secure inventory and proprietary access.",
                "On-ground command centers synchronizing logistics, security, and hospitality.",
                "Narrative design teams capturing content, press, and philanthropic storytelling.",
                "Post-event ROI retrospectives translating data into next-season strategies.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/60 p-5"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black p-12 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-300">
            Global Mandate. African Soul.
          </span>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Ready to craft your next legacy moment?
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Engage The Black Spear Agency for private briefings, mega-event
            retainers, or bespoke cultural immersions. Our command team responds
            within 24 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 text-sm md:flex-row">
            <a
              className="rounded-full border border-amber-400/60 bg-amber-400/10 px-10 py-3 text-sm uppercase tracking-[0.3em] text-amber-200 transition hover:bg-amber-400/20"
              href="mailto:concierge@blackspear.agency"
            >
              concierge@blackspear.agency
            </a>
            <a
              className="rounded-full border border-white/20 px-10 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:border-amber-400/60 hover:text-amber-200"
              href="https://cal.com/blackspear/briefing"
              target="_blank"
              rel="noreferrer"
            >
              Request Strategic Briefing
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.35em] text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} The Black Spear Agency</span>
          <span>Johannesburg · Lagos · Doha · London</span>
          <span>FIFA Luxury Travel · Sports Marketing · Cultural Strategy</span>
        </footer>
      </main>
    </div>
  );
}
