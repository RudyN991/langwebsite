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
        id: "per-aspera-ad-astra",
        title: "Per Aspera Ad Astra",
        description: "A stoic phrase about hardship, perseverance, and the path toward great achievement.",
        content: [
          '"Per aspera ad astra" (circa 19 BC) is a popular Latin phrase adapted from Stoic philosophy that means "through hardships, to the stars". The saying supports this idea through its wording and historical use, deriving not from one singular author or philosopher, but rather multiple different texts and sayings that circle around the idea that progress requires hardship (more specifically, the path from the earth to the stars is not easy). The purpose of this saying is motivational, conveying that progress requires difficulty and achieving something great is not meant to be easy. The saying builds a realistic but uplifting tone to represent the motivating reminder to continue even in the face of hardship.',
        ],
        sourceUrl:
          "https://www.holstee.com/blogs/mindful-matter/per-aspera-ad-astra?srsltid=AfmBOorI9ypz_XI8D5AO_8OStWYhUUB-jTrUb5fxltdiq8SjYco-Wbph",
        commentary: [
          '"Per aspera ad astra" is a saying that embodies the difficulty of progress nearly perfectly, especially space exploration. The saying itself represents the slow and gritty path toward achieving a difficult goal, directly illustrating the nature of space technology and exploration. Space exploration takes time, money, and effort and does not always work out, as evident from the Apollo missions. They require sacrifice and are riddled with setbacks, however overcoming those setbacks and continuing on that path has led to great advancements for humanity. From landing on the moon to mapping out deep space, the rewards of persevering on the path from the Earth to the Stars have been great. "Per aspera ad astra" embodies space exploration directly, literally representing the difficulty of getting to the stars. It is a nod to why humanity should continue exploring the stars.',
        ],
      },
      {
        id: "fortune-favors-the-bold",
        title: "Fortune Favors the Bold",
        description: "A classical idea that progress often belongs to those willing to take meaningful risks.",
        content: [
          '"Fortune favors the bold" is a stoic saying that originates from old Roman plays and stories (circa 160 BC) that exemplifies the value of taking a risk. The saying illustrates how those who take the risk and act bold are more likely to achieve their goals. The purpose of the saying is motivational but also acts as a push against living in comfort, depicting how it takes discomfort and uncertain risks to achieve. The saying sets itself in an uplifting and motivational tone and is broad, applying to a wide audience, not anchoring specifically to any context.',
        ],
        sourceUrl:
          "https://stoicquotes.com/fortune-favors-the-brave/#the_history_of_fortune_favors_the_brave",
        commentary: [
          '"Fortune favors the bold" is a broad quote that generally applies to any goal that requires risk or sacrifice. It works in almost any context, especially space exploration. The quote highlights how difficult goals require taking risks that do not pay back instantly. It portrays how uncertain decisions are often required to get somewhere notable, similar to astronomical exploration. Space technologies take millions of dollars to develop, years to perfect, and risk the lives of many. However, it is a necessary risk. Space exploration well embodies fortune favoring the bold because without being bold, progress would not be possible. The reward for being bold and taking the risk was landing on the moon and exploring the stars, embodying the fortune that followed the risk. Overall, the quote highlights how the sacrifices that space exploration requires are necessary for progress and how humanity should continue being bold and exploring the stars.',
        ],
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
        id: "astronomy-education",
        title: "Astronomy Education",
        description: "Why stronger astronomy education pipelines matter for long-term scientific progress.",
        content: [
          'John Percy, in his article "Astronomy Education: A Global Perspective" argues that there is a need for more astronomy related education to attract more young people to study the subject and progress it. He argues that STEM, and especially astronomy is underrepresented due to the lack of teaching materials teachers have, the limited training they have, and the key problem they have concerning that astronomy deals with the night, when students are not in school. The purpose of this article was to highlight the main flaws that surround classic astronomy education, especially at the younger level, and how they need to be addressed to further progress and participation in astronomy for the younger generations. Percy also includes some of the developments that were made around the world to target the astronomy education problem and lays a very direct tone within a short paragraph to convey the issue as clearly as possible and surround it with examples of how it can be addressed to create an optimistic view of the situation.',
        ],
        sourceUrl: "https://www.ips-planetarium.org/page/a_percy1995",
        commentary: [
          "This source highlights the importance of astronomy education and how the lack thereof is a major issue on an international level, especially so in the US. Many teachers believe astronomy to be a complex field and that idea carries onto students, creating a lack of new astronomers and limiting progress in the field. My community service idea would be to create a local astronomy focused program in public libraries that could partner with local schools. Many schools already work with libraries and having a program set outside of school helps deal with the issue of constrained school times. The program could include basic astronomy experience with science and concepts and reinforce them with basic projects. External involvement outside the context of school with hands-on discovery could help foster interest more effectively than in school programs and facilitate curiosity. This program could easily tie into a non-profit to deal with limiting costs and a central location such as a library would provide easy access, effectively addressing the lack of astronomy related education across many students at a time.",
        ],
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
        id: "artemis-ii-investment",
        title: "Artemis II Investment",
        description: "A public-facing argument that space spending is a better long-term investment than destructive alternatives.",
        content: [
          "USA Today, in its \"Your Turn\" article \"Artemis II is a better use of money than welfare or bombs\" (2026), presents the view that the Artemis missions were worth their cost as space exploration provides a good use of money. The article supports this by including the viewpoint of several people repeating the same idea that exploration is built into human DNA and that space exploration brings about more positive technological development than something like warfare spending. The purpose of the article is to highlight the public opinion surrounding investment in space exploration and how many believe the mission was a good investment, simultaneously highlighting how space exploration is a beneficial investment. The article takes multiple tones by including many people's takes, from academic and logical to wondrous and emotional, all highlighting how exploration and space stand to benefit humanity in the long run.",
        ],
        sourceUrl:
          "https://www.usatoday.com/story/opinion/voices/2026/04/10/artemis-landing-cost-nasa-mission-space/89524607007/",
        commentary: [
          "One major argument this article makes is that space exploration is a beneficial investment for humanity. It highlights how funding space missions is a better investment than something like warfare and has more long term developmental benefits. This directly supports my argument of how space exploration is beneficial and should be continued. Beyond just the Artemis missions, this source proves how historical investment has paid off in the form of satellites and new technologies. It also ties into the philosophical end of the argument and bolsters that humans are built to explore, supporting the distinction that we should continue to explore the stars while also supporting it with evidence. Overall, this source argues for the benefits of space investment and continuation of development and supports my argument concerning the topic directly.",
        ],
      },
      {
        id: "privatizing-space-exploration",
        title: "Privatizing Space Exploration",
        description: "An argument that private-sector competition can strengthen long-term space development.",
        content: [
          "Robert Frost argues in Forbes' \"The Pros And Cons Of Privatizing Space Exploration\" (2022) that while the privatization of space exploration is a nuanced topic, overall private company involvement benefits its development. Frost supports this point by highlighting how the private development of space technology can lower costs and increase innovation and supports this with historical examples for aerial aviation post WWI. The purpose of the article was to advocate for the benefits of the privatization of space exploration and how it can overall benefit the development of the field through more exposure and healthy competition. Frost further bolsters his point both through his title as an Instructor and Flight Controller at NASA and adopts a nuanced tone, helping boost his credibility considering both the field and the specific evidence he chose to use to support his argument, making his argument seem more grounded and acceptable.",
        ],
        sourceUrl:
          "https://www.forbes.com/sites/quora/2017/04/04/the-pros-and-cons-of-privatizing-space-exploration/",
        commentary: [
          "Robert Frost develops the argument that privatization boosts the development of the space exploration field. He references how for the development and progress of aerial fields historically, private involvement has been beneficial,for both scientific development and economic opportunity for companies. This directly ties into my main argument about the importance of space development and how it is overall beneficial to humanity. Space exploration should be continued not only for the sake of exploration but because it provides an outside incentive for opportunity beyond just science. It is a two sided relationship benefitting both private companies as well as the field itself, through both privatization and competition which respectively bring more revenue and lower the cost of development. Overall, Frost's argument directly ties into how continuing space exploration stands to be beneficial to humanity.",
        ],
      },
      {
        id: "stop-spending-money-on-space-exploration",
        title: "Stop Spending Money on Space Exploration",
        description: "A counterargument that space spending can come at the expense of more immediate human needs.",
        content: [
          "Alisha Ramani, in her opinion article \"Stop Spending Money on Space Exploration\", argues that space exploration, while novel and intriguing, is not directly helpful to humanity and is a waste of resources that could be applied elsewhere more effectively. Ramani supports her point through an example of a major NASA discovery of the first picture of a black hole. She compares the costs and argues that the picture had no direct effect on the state of the world and the $25 billion dollars could have been used on one of the numerous other, arguably more dire, problems of humanity such as homelessness, climate change, and terrorism. The purpose of this article was to highlight the pitfalls of space exploration investment and how the money that is often spent on space exploration results in little impactful discoveries, which conversely could have been used to solve other more immediate problems on Earth. Ramani uses a direct tone to present her ideas without any sugarcoating; opening with an anecdote on her interest with space and then directly switching to the main distinction she is arguing about to create both a credible and impactful stance for her point.",
        ],
        sourceUrl: "https://theperennial.org/2763/opinion/stop-spending-money-on-space-exploration/",
        commentary: [
          "Ramani makes a strong counterpoint to the importance of space exploration through her source. Her main point of Earthly problems is a valid concern, especially factoring in the vast cost of space exploration and development. While space exploration can yield beneficial information and set a foundation for future development and exploration, up to even colonization beyond Earth, it is not immediately effective if we cannot solve our firsthand bigger problems like homelessness or climate change first. On the other hand, space exploration is important and beneficial in the sense that we cannot further technology or create the base for a future in space without modern day investment. Space technology also is often repurposed for other beneficial uses across fields like materials, medical, and engineering and one of the major points is that of the many industries that get investment, space exploration gets relatively less; this presents the opportunity to balance spending from other fields like defense rather than limit space spending. Overall, Ramani's point, while it does not cover all the points of the consequences of space exploration, complicates the argument by providing an accurate highlight of the pitfalls of the money and time investment in space exploration and development.",
        ],
      },
    ],
  },
];
