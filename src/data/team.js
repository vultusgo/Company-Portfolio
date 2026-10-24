/**
 * Core development team.
 *
 * !! PLACEHOLDER !!  Add real `name` and `photo` for each member.
 * When `name` is null the card shows the role as its heading and an initials avatar.
 *
 * tracks: which service pages show the member ("web" | "mobile")
 */
export const developmentTeam = [
  {
    id: "architect",
    name: null,
    role: "Lead Full-Stack Architect",
    photo: null,
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    tracks: ["web", "mobile"],
  },
  {
    id: "frontend",
    name: null,
    role: "Senior Frontend Engineer",
    photo: null,
    stack: ["React", "TypeScript", "Tailwind CSS"],
    tracks: ["web"],
  },
  {
    id: "backend",
    name: null,
    role: "Backend & API Engineer",
    photo: null,
    stack: ["Node.js", "FastAPI", "MongoDB", "Docker"],
    tracks: ["web"],
  },
  {
    id: "flutter",
    name: null,
    role: "Senior Flutter Engineer",
    photo: null,
    stack: ["Flutter", "Dart", "Firebase"],
    tracks: ["mobile"],
  },
  {
    id: "react-native",
    name: null,
    role: "React Native Engineer",
    photo: null,
    stack: ["React Native", "TypeScript", "REST APIs"],
    tracks: ["mobile"],
  },
  {
    id: "designer",
    name: null,
    role: "UI/UX Designer",
    photo: null,
    stack: ["Figma", "Design Systems", "Prototyping"],
    tracks: ["web", "mobile"],
  },
];

export const getTeamByTrack = (track) => developmentTeam.filter((m) => m.tracks.includes(track));
