import { story, storyIntro } from "../content";

export function StorySection() {
  return (
    <section id="story" className="section story reveal-on-scroll" aria-labelledby="story-title">
      <div className="container stack">
        <p className="eyebrow">{storyIntro.eyebrow}</p>
        <h2 id="story-title">{storyIntro.title}</h2>
        <p className="lede">{storyIntro.lede}</p>
        <div className="timeline">
          {story.map((item, index) => (
            <article
              key={item.title}
              className="timeline-card reveal-on-scroll"
              style={{ ["--delay" as string]: `${index * 90}ms` }}
              aria-label={item.title}
            >
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
