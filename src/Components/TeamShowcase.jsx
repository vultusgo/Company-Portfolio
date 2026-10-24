import SectionHeader from "./ui/SectionHeader";
import { getTeamByTrack } from "../data/team";

const initialsOf = (text) =>
  text
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const Avatar = ({ member }) => {
  const label = member.name ?? member.role;
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={`${label}, portrait`}
        loading="lazy"
        className="w-16 h-16 rounded-xl object-cover border border-surface-700"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 flex items-center justify-center font-mono text-lg font-semibold text-white"
    >
      {initialsOf(label)}
    </div>
  );
};

/**
 * "Core Development Team" cards on a dark section.
 * `track` = "web" | "mobile" filters members via data/team.js
 */
const TeamShowcase = ({
  track,
  title = "Meet the Core Development Team",
  subtitle = "The engineers and designers who plan, build and ship your product.",
}) => {
  const members = getTeamByTrack(track);
  if (members.length === 0) return null;

  return (
    <section aria-labelledby={`team-${track}`} className="section-y bg-surface-950">
      <div className="container-x">
        <SectionHeader
          tone="dark"
          badge="Core team"
          title={<span id={`team-${track}`}>{title}</span>}
          subtitle={subtitle}
        />

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((member) => (
            <li key={member.id} className="card-glow-dark p-6">
              <Avatar member={member} />
              <h3 className="mt-5 text-lg font-semibold text-white">{member.name ?? member.role}</h3>
              {member.name && <p className="mt-1 text-sm text-surface-400">{member.role}</p>}

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {member.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs tracking-wide px-2.5 py-1 rounded-full border border-surface-700 bg-surface-800 text-surface-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamShowcase;
