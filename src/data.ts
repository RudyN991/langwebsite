import { Topic } from "./types";

const placeholder = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt facilisis, nunc nisl aliquam nunc, vitae aliquam nisl nunc vel nisl. Integer placerat, velit non aliquet aliquet, est risus luctus sem, vitae posuere lectus nulla et nibh.",
];

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
        content: [
          "Neil deGrasse Tyson (a renowned astrophysicist), in his book Astrophysics for People in a Hurry (2017), asserts that the universe is vast, filled to the brim with secrets, and most of all is worth being studied. He supports this proposal by including many examples of different discoveries that humans have made concerning astronomy and science and how they tie into the modern world, from basic physical background to elements to galaxies. His purpose is to incite curiosity of exploration and discovery amongst his readers concerning the cosmos in order to further advance the support for astronomical progress and science amongst the current and future generations. He established a very casual and light tone with his audience, introducing himself personally and including down to earth comments straying away from the academic jargon that surrounds physics works, most likely to connect with his audience more interpersonally and reach as many people as possible to build curiosity without requiring an established professional base.",
        ],
        sourceUrl:
          "https://medium.com/@edsetiadi/book-review-astrophysics-for-people-in-a-hurry-by-neil-degrasse-tyson-1ef2e556022a",
        commentary: [
          "Neil deGrasse Tyson spends the majority of the book discussing common topics and discoveries that humans have made concerning space and how they connect to earthly science topics. He highlights the advancement of human understanding of the universe from previous models to modern models as well as their pitfalls. Through this, he incites curiosity in the reader and also asserts that space is a vast field with unlimited potential for discovery. By connecting these topics with real advancements on earth, along with the further questions he leaves the reader with, he emphasizes the importance of exploring space and astronomical advancement. Overall, Tyson's book stands a direct and indirect argument for humans to continue looking at the stars.",
        ],
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
        content: [
          "In his acclaimed movie Interstellar (2014), Christopher Nolan (a well known director and screenwriter) illustrates the importance of cosmic exploration for the survival of humanity. He supports this claim by utilizing a realistic issue to incite the plot - a world ending situation akin to climate change - and by illustrating how astronomy builds the shot at survival for the humans, equally through Cooper's daughter as much as Cooper. His purpose is to bring to attention both the importance of space exploration for preserving future earth and to advance the future of humanity. Nolan takes on a dramatic lens over the film, providing a more cautionary and poignant tone with the audience to create a lasting impression.",
        ],
        sourceUrl: "https://www.rogerebert.com/reviews/interstellar-2014",
        commentary: [
          "Christopher Nolan combines his script story in perfect tandem with the visual and audible parts of the movie to emphasize the true importance of space exploration. While the movie seems like a direct sci-fi story, the subtle details of realistic physics and constraints with a real possible problem humanity could face in the future create a sense of urgency that pushes the applications of astronomy beyond just a big screen with fancy VFX. From the accurate rendering of the black hole to the ships that Cooper's team uses to the gravity equation that Murph develops, the movie uses multiple grounding points that really emphasize how space science connects to modern world advancements and will only continue to do more so. Overall, through the stunning visuals and the evocative sound tracks, Nolan pushing the narrative that humans should continue looking at the stars.",
        ],
      },
      {
        id: "cosmic-soundtracks",
        title: "Cosmic Soundtracks",
        description: "Songs and scores that make astronomy feel expansive, urgent, and human.",
        content: placeholder,
      },
      {
        id: "museum-archives",
        title: "Museum Archives",
        description: "Exhibits and historical collections that connect astronomy to public memory.",
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
