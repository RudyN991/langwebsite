import { useEffect, useMemo, useRef, useState } from "react";
import { heroTags, topics } from "./data";
import { Topic, TopicId } from "./types";

type PageState = {
  topicId: TopicId | null;
  subpageId?: string;
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Record<TopicId, boolean>>(
    () =>
      Object.fromEntries(topics.map((topic) => [topic.id, false])) as Record<
        TopicId,
        boolean
      >,
  );
  const [page, setPage] = useState<PageState>({ topicId: null });
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === page.topicId) ?? null,
    [page.topicId],
  );

  useEffect(() => {
    if (!activeTopic || !page.subpageId) {
      return;
    }

    const node = sectionRefs.current[page.subpageId];
    if (node) {
      window.requestAnimationFrame(() => {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [activeTopic, page.subpageId]);

  const openTopic = (topicId: TopicId, subpageId?: string) => {
    setPage({ topicId, subpageId });
    setDrawerOpen(false);
  };

  const goHome = () => {
    setPage({ topicId: null });
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleExpanded = (topicId: TopicId) => {
    setExpandedTopics((current) => ({
      ...current,
      [topicId]: !current[topicId],
    }));
  };

  return (
    <div className="app-shell">
      <div className="starfield" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-left" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-right" aria-hidden="true" />

      <header className="topbar">
        <button className="brand" onClick={goHome}>
          Looking up at the Stars
        </button>
        <button className="ghost-button" onClick={() => setDrawerOpen(true)}>
          Explore Concept
        </button>
      </header>

      <main className="page-wrap">
        {activeTopic ? (
          <TopicPage
            topic={activeTopic}
            onBackHome={goHome}
            onOpenSubpage={(subpageId) => setPage({ topicId: activeTopic.id, subpageId })}
            registerSection={(subpageId, node) => {
              sectionRefs.current[subpageId] = node;
            }}
          />
        ) : (
          <HomePage onExplore={() => setDrawerOpen(true)} onOpenTopic={openTopic} />
        )}
      </main>

      <Drawer
        open={drawerOpen}
        expandedTopics={expandedTopics}
        activeTopicId={activeTopic?.id ?? null}
        onClose={() => setDrawerOpen(false)}
        onToggleTopic={toggleExpanded}
        onOpenTopic={openTopic}
      />
    </div>
  );
}

function HomePage({
  onExplore,
  onOpenTopic,
}: {
  onExplore: () => void;
  onOpenTopic: (topicId: TopicId) => void;
}) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy glass-panel">
          <p className="eyebrow">AP Lang Project Site</p>
          <h1>Looking up at the Stars</h1>
          <p className="hero-description">
            A comprehensive overview on the importance of space exploration concerning
            the future of humanity.
          </p>

          <div className="tag-row" aria-label="Featured concepts">
            {heroTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <button className="primary-button" onClick={onExplore}>
            Explore Concept
          </button>
        </div>

        <div className="hero-visual glass-panel" aria-hidden="true">
          <div className="orbit-core" />
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-ring orbit-ring-three" />
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="signal signal-three" />
        </div>
      </section>

      <section className="overview-section">
        <div className="section-heading">
          <p className="eyebrow">REHUGO Framework</p>
          <h2>Six perspectives on why space exploration matters</h2>
          <p>
            Each category opens into its own focused page with placeholder sections ready
            for your real project content.
          </p>
        </div>

        <div className="topic-grid">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className="topic-card glass-panel"
              onClick={() => onOpenTopic(topic.id)}
            >
              <span
                className="topic-accent"
                style={{ background: `linear-gradient(135deg, ${topic.accent}, transparent)` }}
                aria-hidden="true"
              />
              <p className="topic-kicker">{topic.shortLabel}</p>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function Drawer({
  open,
  expandedTopics,
  activeTopicId,
  onClose,
  onToggleTopic,
  onOpenTopic,
}: {
  open: boolean;
  expandedTopics: Record<TopicId, boolean>;
  activeTopicId: TopicId | null;
  onClose: () => void;
  onToggleTopic: (topicId: TopicId) => void;
  onOpenTopic: (topicId: TopicId, subpageId?: string) => void;
}) {
  return (
    <>
      <div
        className={`drawer-backdrop ${open ? "visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Navigation</p>
            <h2>Explore the site</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close navigation">
            ×
          </button>
        </div>

        <div className="drawer-list">
          {topics.map((topic) => {
            const expanded = expandedTopics[topic.id];
            const isActive = activeTopicId === topic.id;

            return (
              <section
                key={topic.id}
                className={`drawer-group glass-panel ${isActive ? "active" : ""}`}
              >
                <div className="drawer-group-header">
                  <button
                    className="drawer-topic-button"
                    onClick={() => onOpenTopic(topic.id)}
                  >
                    <span>{topic.title}</span>
                    <small>{topic.shortLabel}</small>
                  </button>
                  <button
                    className="icon-button small"
                    onClick={() => onToggleTopic(topic.id)}
                    aria-label={expanded ? "Collapse topic" : "Expand topic"}
                  >
                    {expanded ? "−" : "+"}
                  </button>
                </div>

                {expanded && (
                  <div className="subpage-list">
                    {topic.subpages.map((subpage) => (
                      <button
                        key={subpage.id}
                        className="subpage-button"
                        onClick={() => onOpenTopic(topic.id, subpage.id)}
                      >
                        <span>{subpage.title}</span>
                        <small>{subpage.description}</small>
                      </button>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </aside>
    </>
  );
}

function TopicPage({
  topic,
  onBackHome,
  onOpenSubpage,
  registerSection,
}: {
  topic: Topic;
  onBackHome: () => void;
  onOpenSubpage: (subpageId: string) => void;
  registerSection: (subpageId: string, node: HTMLElement | null) => void;
}) {
  return (
    <section className="topic-page">
      <div className="topic-hero glass-panel">
        <button className="ghost-button" onClick={onBackHome}>
          Back Home
        </button>
        <p className="eyebrow">{topic.shortLabel}</p>
        <h1>{topic.title}</h1>
        <p className="topic-summary">{topic.overview}</p>

        <div className="subpage-card-grid">
          {topic.subpages.map((subpage) => (
            <button
              key={subpage.id}
              className="subpage-card"
              onClick={() => onOpenSubpage(subpage.id)}
            >
              <h3>{subpage.title}</h3>
              <p>{subpage.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="subpage-sections">
        {topic.subpages.map((subpage) => (
          <article
            key={subpage.id}
            id={subpage.id}
            ref={(node) => registerSection(subpage.id, node)}
            className="subpage-section glass-panel"
          >
            <p className="eyebrow">Featured Section</p>
            <h2>{subpage.title}</h2>
            <p>{subpage.description}</p>
            <div className="subpage-body">
              {subpage.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {subpage.sourceUrl && (
                <p className="subpage-source">
                  <span>Link to source: </span>
                  <a href={subpage.sourceUrl} target="_blank" rel="noreferrer">
                    {subpage.sourceUrl}
                  </a>
                </p>
              )}

              {subpage.commentary && (
                <div className="subpage-commentary">
                  <p className="subpage-label">Personal commentary:</p>
                  {subpage.commentary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default App;
