/**
 * Project preview. Renders `heroImage` when present; otherwise a lightweight
 * browser / phone mockup built from divs (no network request, no blur).
 */
const bar = "rounded-full bg-surface-200";

const WebMock = ({ variant }) => (
  <div className="absolute inset-x-[8%] top-[10%] bottom-0 rounded-t-xl bg-white border border-surface-200 border-b-0 shadow-[var(--shadow-card-hover)] overflow-hidden">
    <div className="flex items-center gap-1.5 px-3 h-6 border-b border-surface-200 bg-surface-50">
      <span className="w-2 h-2 rounded-full bg-surface-300" />
      <span className="w-2 h-2 rounded-full bg-surface-300" />
      <span className="w-2 h-2 rounded-full bg-surface-300" />
      <span className="ml-3 h-3 flex-1 max-w-[50%] rounded bg-surface-200" />
    </div>
    {variant === 0 && (
      <div className="flex h-full">
        <div className="w-[22%] border-r border-surface-100 p-2 space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-brand-600" />
          {[60, 80, 50, 70].map((w, i) => <div key={i} className={`h-1.5 ${bar}`} style={{ width: `${w}%` }} />)}
        </div>
        <div className="flex-1 p-3 space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => <div key={i} className="h-9 rounded-md bg-surface-100 border border-surface-200" />)}
          </div>
          <div className="h-16 rounded-md bg-surface-100 border border-surface-200" />
        </div>
      </div>
    )}
    {variant === 1 && (
      <div className="p-3 space-y-2">
        <div className="h-12 rounded-md bg-surface-950 flex items-center px-3 gap-2">
          <div className="h-2 w-1/3 rounded bg-white/80" />
          <div className="h-4 w-12 rounded bg-brand-600 ml-auto" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => <div key={i} className="aspect-[4/3] rounded-md bg-surface-100 border border-surface-200" />)}
        </div>
        {[0, 1, 2].map((i) => <div key={i} className="h-3 rounded bg-surface-100 border border-surface-200" />)}
      </div>
    )}
    {variant === 2 && (
      <div className="p-3 space-y-1.5">
        <div className="flex items-end gap-1.5 h-14 px-1">
          {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
            <div key={i} className={`flex-1 rounded-t ${i === 5 ? "bg-brand-600" : "bg-surface-200"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        {[0, 1, 2].map((i) => <div key={i} className="h-3 rounded bg-surface-100 border border-surface-200" />)}
      </div>
    )}
  </div>
);

const MobileMock = ({ variant }) => (
  <div className="absolute left-1/2 -translate-x-1/2 top-[8%] bottom-0 w-[30%] min-w-[96px] rounded-t-[1.5rem] bg-white border-[3px] border-b-0 border-surface-900 shadow-[var(--shadow-card-hover)] overflow-hidden">
    <div className="mx-auto mt-1.5 h-1.5 w-8 rounded-full bg-surface-900" />
    <div className="p-2.5 space-y-2">
      <div className="h-2.5 w-1/2 rounded bg-surface-900" />
      {variant === 0 && <div className="h-14 rounded-lg bg-brand-600" />}
      {variant === 1 && <div className="h-14 rounded-lg bg-surface-950 flex items-end p-2"><div className="h-1.5 w-1/2 rounded bg-brand-400" /></div>}
      {variant === 2 && <div className="h-14 rounded-lg bg-surface-100 border border-surface-200" />}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-surface-100 border border-surface-200 shrink-0" />
          <span className={`h-1.5 flex-1 ${bar}`} />
        </div>
      ))}
    </div>
  </div>
);

const ProjectVisual = ({ project, className = "" }) => {
  const { heroImage, title, type, id } = project;
  const variant = id % 3;

  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface-100 to-surface-200 ${className}`}>
      {heroImage ? (
        <img
          src={heroImage}
          alt={`${title} preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : (
        <div role="img" aria-label={`${title} prototype preview`} className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
          {type === "mobile" ? <MobileMock variant={variant} /> : <WebMock variant={variant} />}
        </div>
      )}
    </div>
  );
};

export default ProjectVisual;
