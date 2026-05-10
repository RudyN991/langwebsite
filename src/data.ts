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
        content: [
          'David Bowie, a renowned musician, in his song "Starman" (1972), reflects humanity\'s hope and fascination with the stars. The song supports this through its lyrics, most notably its hook, that highlight the Starman\'s brightness and the fascination that everyone shares with him. His purpose is to invoke a sense of hopefulness for a bright future and a sense of wonder amongst his listeners about the stars and beyond them. Bowie uses an upbeat background track to bolster the optimistic tone of the song and highlight the central Starman part that circles around the idea of life beyond Earth, all overlaid with a synth style tune to further push that wondrous feeling.',
        ],
        sourceUrl:
          "https://www.davidbowie.com/2002/2002/04/28/starman-released-30-years-ago-today",
        commentary: [
          'David Bowie does a good job with combining sound design with his lyrics to highlight the main point of the song. The song opens slowly in a way that seems unrelated to the main point, almost highlighting the lack of fascination. Then it jumps into the classic beat with the famous hook "There\'s a Starman waiting in the sky", creating a stark contrast that makes the tone and idea clear to the reader. Bowie also uses wordplay well with that to give the stars beyond a personality of a Starman, making it more interpersonal and making the wonder easier to classify. Through this he effectively makes the stars seem like an optimistic future on the horizon that humanity should aim for. In tandem with his other works, "Starman" deals with the idea of life beyond earth. However, this song specifically also well connects the general idea of space to a topic of fascination. The age of the song only acts as testament to the development of space advancement\'s importance because even today, the main idea of exploring the stars remains common and ever more in reach. Overall, the song highlights the importance of space and the fascination that surrounds it and effectively highlights/bolsters that curiosity about what\'s beyond the stars.',
        ],
      },
      {
        id: "museum-archives",
        title: "Museum Archives",
        description: "Exhibits and historical collections that connect astronomy to public memory.",
        content: [
          "The Wings Over the Rockies Air & Space Museum in Denver, Colorado (1994) highlights through its various historical exhibits the advancement of humanity from the air to space. It highlights exhibits such as the Apollo 11 computer and the rocket engine models alongside the F-14 Tomcat highlighting all ranges of influential air and space technology. Their purpose is to inform the general public of technological development in the Aerospace field over time and often focus on their space related exhibits and future technological development for astronomical travel. The museum provides a multitude of different exhibits from different time periods that gives the visitors a comprehensive view at the scale of technological progression, from WWII relic bombers to modern jets, overall highlighting the natural curiosity and development that has resulted from space travel and research.",
        ],
        sourceUrl: "https://www.colorado.com/denver/wings-over-the-rockies-air-space-museum",
        commentary: [
          'The Wings over the Rockies Air & Space Museum sets up a lot of their exhibits in a way that highlights the distinctions between the modern and classic planes. It sections off the space into its own area that is surrounded by related aircraft, highlighting the technological advancements that result as part of space exploration. It has exhibits of the fastest car, nuclear bombers, modern fighter jets, old war planes, and engines. Its wide variety of exhibits highlight in the most direct way the compounding of aerospace technology and how space and air exploration and advancement have benefitted humanity. On top of that, its exhibits on the models of the Star Wars spacecraft add a sense of future possibility, representing a "this could come next" image and further clarifying the importance of aerospace. Overall, the museum supports the natural curiosity for the stars and the importance of why space exploration is important to the advancement of humanity.',
        ],
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
        id: "apollo-11",
        title: "Apollo 11",
        description: "The moon landing as a defining milestone in global space history.",
        content: [
          "NASA's Apollo 11 mission (1969) was a turning point in astrospace history, an ambitious challenge to land the first humans on the moon. The overview of the mission provides direct insight to the development of astrospace technology through the many tries it took and the different versions of modern tools that we use today that derived from it. It also had a profound historical impact with the development of modern space programs across the world. The purpose of the mission was to land the first person on the moon and to incite an age of technological space innovation in the US, with the side effect of the USSR and the rest of the world following suit. The breakthrough achievement made headlines across the world and provided a look at Earth and humanity from an external lens, emphasizing the importance of science and the lure of space widely for the future.",
        ],
        sourceUrl: "https://www.nasa.gov/mission/apollo-11/",
        commentary: [
          "The Apollo 11 mission stands as one of the most important milestones for space and astronomy. It proved the worth of aerospace advancement and sparked the initial craze around exploring the stars. The mission is one of the staple pillars and the poster child for the ideas of reaching out to the stars and exploring the beyond. It is one of the most influential milestones and sparked peace and reform for the following decade, proving the benefits of space exploration. The technological developments formed the basis of many modern inventions such as compact computers and flight technology. Overall, the Apollo 11 mission stands as one of the strongest pieces of evidence for the importance of space exploration.",
        ],
      },
      {
        id: "james-webb-space-telescope",
        title: "James Webb Space Telescope",
        description: "A modern observatory that expands how deeply humanity can study the universe.",
        content: [
          "NASA, in its overview of the James Webb telescope (2021), explains that the telescope represents a major milestone of modern space development. The overview supports this idea by emphasizing the discoveries and the potential advancements the telescope could bring about, from aerospace fields to astronomical fields and beyond. The purpose of the telescope is to utilize new technological developments to study the universe deeper and discover more information about the formation of the universe, developing our understanding of the universe further and thereby modern advancements. The telescope represents a major advancement for space research and the result of the continuing development that humans make by looking up at the stars to learn more.",
        ],
        sourceUrl: "https://science.nasa.gov/mission/webb/",
        commentary: [
          "The James Webb telescope is a resulting proof of the benefits that space exploration has brought about. The overall telescope is a major development that could develop modern physics and the model of the universe by making new discoveries with the modern technology it's equipped with. The underlying context of the telescope supports the benefit that space research has provided and the continuing effort of the world in support of exploring beyond. The telescope represents millions in funding backed by the work of thousands of people and is built on top of the space tech that preceded it. As of today it already brings about discoveries that are already changing humanity's understanding of the universe, such as measurements concerning the expansion of the universe and star development. Overall, the telescope represents the developing benefits of space travel on top of the historical benefits, proving the lasting effect that exploring beyond has.",
        ],
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
