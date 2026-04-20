import { Topic } from "./types";

const placeholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt facilisis, nunc nisl aliquam nunc, vitae aliquam nisl nunc vel nisl. Integer placerat, velit non aliquet aliquet, est risus luctus sem, vitae posuere lectus nulla et nibh.";

export const heroTags = [
  "Artemis",
  "Black Holes",
  "Planetary Defense",
  "JWST",
  "Life Beyond Earth",
];

export const topics: Topic[] = [
  {
    id: "reading",
    title: "Reading",
    shortLabel: "Texts",
    description:
      "Articles, research, and analysis that frame why space exploration matters beyond novelty.",
    overview:
      "This section gathers written sources that connect astronomy, innovation, and long-term human progress.",
    accent: "#8bc6ff",
    subpages: [
      {
        id: "deep-space-literacy",
        title: "Deep Space Literacy",
        description: "Foundational reading about modern astronomy and exploration.",
        content: placeholder,
      },
      {
        id: "mission-briefings",
        title: "Mission Briefings",
        description: "Concise summaries of major programs and their goals.",
        content: placeholder,
      },
      {
        id: "science-communication",
        title: "Science Communication",
        description: "How compelling writing shapes public understanding of space.",
        content: placeholder,
      },
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment",
    shortLabel: "Media",
    description:
      "Films, documentaries, and digital media that make cosmic questions feel immediate and human.",
    overview:
      "Popular media often introduces audiences to the wonder, risk, and possibility of space exploration before formal education does.",
    accent: "#a7b7ff",
    subpages: [
      {
        id: "cinematic-cosmos",
        title: "Cinematic Cosmos",
        description: "How visual storytelling turns abstract science into emotion.",
        content: placeholder,
      },
      {
        id: "documentary-lens",
        title: "Documentary Lens",
        description: "Real missions and discoveries through accessible media.",
        content: placeholder,
      },
      {
        id: "interactive-worlds",
        title: "Interactive Worlds",
        description: "Games and simulations that inspire curiosity about the universe.",
        content: placeholder,
      },
    ],
  },
  {
    id: "history",
    title: "History",
    shortLabel: "Timeline",
    description:
      "Moments in the past that transformed how humanity understands its place in the universe.",
    overview:
      "From the space race to deep-space telescopes, history shows that exploration changes culture, technology, and geopolitics.",
    accent: "#ffd38b",
    subpages: [
      {
        id: "space-race",
        title: "The Space Race",
        description: "Competition, urgency, and the first leap beyond Earth.",
        content: placeholder,
      },
      {
        id: "telescope-era",
        title: "The Telescope Era",
        description: "How better observation tools changed human knowledge.",
        content: placeholder,
      },
      {
        id: "modern-missions",
        title: "Modern Missions",
        description: "The evolution from national prestige to global collaboration.",
        content: placeholder,
      },
    ],
  },
  {
    id: "universal-truths",
    title: "Universal Truths",
    shortLabel: "Ideas",
    description:
      "Big-picture ideas about curiosity, survival, and what exploration reveals about being human.",
    overview:
      "Looking outward often clarifies timeless truths about fragility, resilience, and shared destiny on Earth.",
    accent: "#8bffd7",
    subpages: [
      {
        id: "human-curiosity",
        title: "Human Curiosity",
        description: "Why we keep asking what lies beyond the visible horizon.",
        content: placeholder,
      },
      {
        id: "shared-planet",
        title: "Shared Planet",
        description: "Space as a reminder of Earth's rarity and interconnectedness.",
        content: placeholder,
      },
      {
        id: "future-instinct",
        title: "Future Instinct",
        description: "Exploration as preparation, not escapism.",
        content: placeholder,
      },
    ],
  },
  {
    id: "government",
    title: "Government",
    shortLabel: "Policy",
    description:
      "The role of public institutions, policy, and funding in shaping what missions become possible.",
    overview:
      "Space exploration is driven not only by science, but by budgets, treaties, defense priorities, and national ambition.",
    accent: "#ff9cb5",
    subpages: [
      {
        id: "public-investment",
        title: "Public Investment",
        description: "Why taxpayer-funded research still drives major breakthroughs.",
        content: placeholder,
      },
      {
        id: "international-cooperation",
        title: "International Cooperation",
        description: "Alliances, treaties, and cooperation beyond borders.",
        content: placeholder,
      },
      {
        id: "planetary-defense-policy",
        title: "Planetary Defense Policy",
        description: "Planning for low-probability, high-impact cosmic threats.",
        content: placeholder,
      },
    ],
  },
  {
    id: "opinion",
    title: "Opinion",
    shortLabel: "Argument",
    description:
      "A persuasive lens on why exploration is an investment in knowledge, security, and long-term human flourishing.",
    overview:
      "This section frames the core argument of the project: exploring space is not optional ambition, but practical foresight.",
    accent: "#d9b8ff",
    subpages: [
      {
        id: "why-now",
        title: "Why Now",
        description: "The case for urgency in the present moment.",
        content: placeholder,
      },
      {
        id: "cost-vs-value",
        title: "Cost vs. Value",
        description: "Responding to common objections about expense and priorities.",
        content: placeholder,
      },
      {
        id: "future-of-humanity",
        title: "Future of Humanity",
        description: "Why the long-term argument is also a present-day one.",
        content: placeholder,
      },
    ],
  },
];
