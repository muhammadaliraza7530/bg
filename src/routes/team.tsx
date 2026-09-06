import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { company, images, leadership, team } from "@/data/company";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — B·G Pharma Pakistan" },
      {
        name: "description",
        content:
          "Meet the B·G Pharma Pakistan team, including Regional Manager Mr. Ali Raza Bajwa, serving prescribers and pharmacies across Punjab and Sindh.",
      },
      { property: "og:title", content: "Our Team — B·G Pharma Pakistan" },
      {
        property: "og:description",
        content: "Leadership and field management behind B·G Pharma Pakistan.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper/60 backdrop-blur-xl">
        <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Our people</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary-deep md:text-5xl">
              The team carrying our promise into the field
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {company.coverageNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[leadership, ...team].map((member, i) => (
            <Reveal key={member.role + member.name} delay={i * 90} as="article" className="h-full">
              <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="overflow-hidden bg-paper/60 backdrop-blur-xl">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}, B·G Pharma Pakistan`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="aspect-4/5 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl text-primary-deep">{member.name}</h2>
                  {member.role !== member.name && (
                    <p className="mt-1 text-xs font-bold tracking-[0.14em] text-brand-red uppercase">
                      {member.role}
                    </p>
                  )}
                  {member.region && (
                    <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4 text-primary" aria-hidden /> {member.region}
                    </p>
                  )}
                  {member.phone && member.phoneRaw && (
                    <a
                      href={`tel:${member.phoneRaw}`}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
                    >
                      <Phone className="size-4" aria-hidden /> {member.phone}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={180} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-primary/30 bg-secondary p-8">
              <h2 className="font-display text-xl text-primary-deep">Join our field force</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                We are expanding across {company.coverage}. If you are a medical representative or area
                manager who believes in serving patients first, we would like to hear from you.
              </p>
              <a
                href={`mailto:${company.email}?subject=Career%20enquiry%20-%20B.G%20Pharma%20Pakistan`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Send your CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft lg:grid-cols-2">
            <img
              src={images.conferenceRoom}
              alt="B·G Pharma Pakistan team conference room"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="p-8 md:p-12">
              <p className="eyebrow">Working culture</p>
              <h2 className="mt-4 font-display text-2xl text-primary-deep md:text-3xl">
                Trained, briefed and accountable
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our representatives are briefed on every molecule we carry before they call on a
                doctor — composition, dosage, storage and pricing. That preparation is what lets us
                stand behind the words on our packs.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
