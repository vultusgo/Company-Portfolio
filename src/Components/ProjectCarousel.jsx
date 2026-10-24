import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";
import ActionLink from "./ui/ActionLink";
import { projectTypeLabel } from "../data/projects";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Single slide */
const ProjectSlide = ({ project }) => (
  <article className="card-glow overflow-hidden h-full flex flex-col">
    <ProjectVisual project={project} />
    <div className="p-6 flex flex-col flex-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge-mono">{projectTypeLabel[project.type]}</span>
        <span className="badge-mono badge-mono-neutral">{project.category}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-surface-950">{project.title}</h3>

      <div className="mt-4 flex items-baseline gap-3 border-t border-surface-200 pt-4">
        <span className="font-mono text-sm font-semibold text-brand-700">{project.highlight.value}</span>
        <span className="text-sm text-surface-600">{project.highlight.label}</span>
      </div>

      <div className="mt-auto pt-6">
        <ActionLink
          to={project.liveUrl}
          className="btn btn-secondary w-full sm:w-auto"
          aria-label={`Live preview: ${project.title}`}
        >
          Live Preview
          <FiArrowUpRight size={16} aria-hidden="true" />
        </ActionLink>
      </div>
    </div>
  </article>
);

/**
 * Scroll-snap carousel (one slide per view). Native scrolling gives touch swipe
 * for free; buttons, dots and arrow keys are layered on top. No autoplay.
 */
const ProjectCarousel = ({ projects, label = "Featured projects" }) => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0); // intended slide: stays correct across rapid clicks
  const lockUntil = useRef(0); // ignore scroll-sync while a programmatic scroll runs
  const count = projects.length;

  const goTo = useCallback(
    (i, instant = false) => {
      const el = trackRef.current;
      if (!el || count === 0) return;
      const next = (i + count) % count;
      indexRef.current = next;
      setIndex(next);
      lockUntil.current = instant ? 0 : Date.now() + 700;
      el.scrollTo({
        left: next * el.clientWidth,
        behavior: instant || prefersReducedMotion() ? "auto" : "smooth",
      });
    },
    [count],
  );

  // Keep `index` in sync with native scroll / swipe
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (Date.now() < lockUntil.current) return;
        const next = Math.round(el.scrollLeft / el.clientWidth);
        indexRef.current = next;
        setIndex(next);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Re-align on resize so the current slide stays in view
  useEffect(() => {
    const onResize = () => goTo(indexRef.current, true);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [goTo]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(indexRef.current + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(indexRef.current - 1); }
  };

  if (count === 0) return null;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory rounded-2xl focus-visible:outline-offset-4"
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            inert={i !== index}
            className="w-full shrink-0 snap-center p-px"
          >
            <ProjectSlide project={project} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="font-mono text-xs tracking-wider text-surface-600" aria-live="polite">
          {pad(index + 1)} / {pad(count)}
        </p>

        <div className="flex items-center gap-1.5" role="group" aria-label="Choose slide">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${p.title}`}
              aria-current={i === index}
              className="h-6 px-1 flex items-center cursor-pointer"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-6 bg-brand-600" : "w-1.5 bg-surface-300 hover:bg-surface-500"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(indexRef.current - 1)}
            aria-label="Previous project"
            className="w-10 h-10 rounded-lg border border-surface-300 bg-white flex items-center justify-center hover:border-surface-900 transition-colors cursor-pointer"
          >
            <FiArrowLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(indexRef.current + 1)}
            aria-label="Next project"
            className="w-10 h-10 rounded-lg border border-surface-300 bg-white flex items-center justify-center hover:border-surface-900 transition-colors cursor-pointer"
          >
            <FiArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
