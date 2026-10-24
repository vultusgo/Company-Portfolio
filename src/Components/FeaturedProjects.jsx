import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";
import ActionLink from "./ui/ActionLink";
import SectionHeader from "./ui/SectionHeader";
import { getProjectsByType, projectTypeLabel } from "../data/projects";

/**
 * "Featured Prototypes & Live Works" grid for a service page.
 * `type` = "web" | "mobile" selects which projects are shown.
 * The whole card is clickable (stretched link) and opens liveUrl in a new tab.
 */
const FeaturedProjects = ({
  type,
  title = "Featured Prototypes & Live Works",
  subtitle = "A selection of products we have designed, built and shipped.",
}) => {
  const projects = getProjectsByType(type);
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby={`featured-${type}`} className="section-y bg-white">
      <div className="container-x">
        <SectionHeader
          badge={`Selected works · ${projectTypeLabel[type]}s`}
          title={<span id={`featured-${type}`}>{title}</span>}
          subtitle={subtitle}
        />

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <li key={project.id} className="card-glow group overflow-hidden flex flex-col">
              <ProjectVisual project={project} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-mono">{project.category}</span>
                  <span className="badge-mono badge-mono-neutral">{project.highlight.value}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-surface-950">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-600">{project.problemSolved}</p>

                <ul className="mt-4 space-y-2">
                  {project.mainFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-surface-700">
                      <FiCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-700" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 mb-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="badge-mono badge-mono-neutral !normal-case">{tech}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-surface-200">
                  <ActionLink
                    to={project.liveUrl}
                    aria-label={`View live: ${project.title}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 after:absolute after:inset-0 after:content-['']"
                  >
                    View Live
                    <FiArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </ActionLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
