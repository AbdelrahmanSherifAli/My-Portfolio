import React from "react";
import "./News.css";

const News = () => {
  return (
    <section className="news-section" aria-label="News">
      <div className="tokyo-container">
        <span className="tokyo-label">NEWS</span>
        <h1 className="tokyo-title">Latest News</h1>

        <div className="news-card">
          <div className="news-meta">Coming soon</div>
          <h3 className="news-headline">I’ll share updates about my AI/ML projects here.</h3>
          <p className="news-text">
            This section is a placeholder to match the Tokyo layout. We can add your projects, competitions,
            and achievements as posts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;

