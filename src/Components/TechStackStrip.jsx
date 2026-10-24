import SectionHeader from "./ui/SectionHeader";

/**
 * Technology logo grid for the Web / Mobile development pages.
 * items: [{ name, icon? (react-icons component), src? (image URL) }]
 */
const TechStackStrip = ({
  items,
  title = "Technologies we build with",
  subtitle = "Modern, production-proven tools chosen for performance and long-term maintainability.",
}) => (
  <section aria-label={title} className="section-y bg-white border-y border-surface-200">
    <div className="container-x">
      <SectionHeader badge="Tech stack" title={title} subtitle={subtitle} />
      <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.map(({ name, icon: Icon, src }) => (
          <li
            key={name}
            className="card-glow flex items-center justify-center gap-3 px-4 py-5 text-surface-700 hover:text-surface-950"
          >
            {Icon && <Icon size={22} aria-hidden="true" />}
            {src && <img src={src} alt="" className="h-5 w-auto" loading="lazy" />}
            <span className="text-sm font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechStackStrip;
