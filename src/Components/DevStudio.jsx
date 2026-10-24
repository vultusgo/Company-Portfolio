import { FiArrowRight, FiArrowUpRight, FiGlobe, FiSmartphone } from "react-icons/fi";
import ActionLink from "./ui/ActionLink";
import SectionHeader from "./ui/SectionHeader";
import ProjectCarousel from "./ProjectCarousel";
import { featuredProjects } from "../data/projects";
import { devPortal } from "../data/contactInfo";

const internalLinks = [
  {
    to: "/services/web-development",
    icon: FiGlobe,
    title: "Web Development",
    desc: "Business sites, SaaS and dashboards",
  },
  {
    to: "/services/mobile-app-development",
    icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Android, iOS and cross-platform apps",
  },
];

const DevStudio = () => (
  <section
    id="dev-studio"
    aria-labelledby="dev-studio-heading"
    className="section-y bg-white border-y border-surface-200"
  >
    <div className="container-x">
      <SectionHeader
        badge="Development Studio"
        title={
          <span id="dev-studio-heading">
            Custom web &amp; app engineering,{" "}
            <span className="text-brand-700">ordered directly.</span>
          </span>
        }
        subtitle="Tell us what you need built. Place a project order on our dedicated development platform and work with the engineers who will ship it."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: primary CTA + internal links */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl bg-surface-950 border border-surface-800 p-8">
            <span className="font-mono text-xs font-medium tracking-wider uppercase text-brand-400">
              dev.vultusgo.in
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Start a development project
            </h3>
            <p className="mt-3 text-surface-400 leading-relaxed">
              Scope your website or app, share requirements and get a build plan
              from our engineering team.
            </p>
            <ActionLink to={devPortal.url} className="btn btn-primary btn-lg mt-8 w-full sm:w-auto">
              Order Development
              <FiArrowUpRight size={18} className="btn-arrow" aria-hidden="true" />
            </ActionLink>
          </div>

          {internalLinks.map(({ to, icon: Icon, title, desc }) => (
            <ActionLink key={to} to={to} className="card-glow group flex items-center gap-4 p-5">
              <span className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center shrink-0">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-surface-950">{title}</span>
                <span className="block text-sm text-surface-600">{desc}</span>
              </span>
              <FiArrowRight
                size={18}
                aria-hidden="true"
                className="text-surface-500 transition-transform group-hover:translate-x-1 group-hover:text-brand-700"
              />
            </ActionLink>
          ))}
        </div>

        {/* Right: project prototypes carousel */}
        <div className="lg:col-span-7">
          <p className="mb-4 font-mono text-xs font-medium tracking-wider uppercase text-surface-600">
            Prototypes &amp; live works
          </p>
          <ProjectCarousel projects={featuredProjects} label="Featured prototypes and live works" />
        </div>
      </div>
    </div>
  </section>
);

export default DevStudio;
