/**
 * Reusable section header: mono badge + title + optional subtitle.
 * tone="light" for white/zinc sections, tone="dark" for dark sections.
 */
const SectionHeader = ({ badge, title, subtitle, align = "center", tone = "light", as: Tag = "h2", className = "" }) => {
  const dark = tone === "dark";
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {badge && (
        <span
          className={`badge-mono ${
            dark ? "!bg-brand-500/10 !border-brand-500/30 !text-brand-400" : ""
          }`}
        >
          {badge}
        </span>
      )}
      <Tag
        className={`mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${
          dark ? "text-white" : "text-surface-950"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-surface-400" : "text-surface-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
