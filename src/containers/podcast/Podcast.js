import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);
  const sectionRef = useScrollReveal();

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <div ref={sectionRef} className="main reveal-up">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode podcast-header-subtitle"
              : "subTitle podcast-header-subtitle"
          }
        >
          {podcastSection.subtitle}
        </p>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map((podcastLink, i) => {
          if (!podcastLink) {
            console.log(`Podcast link for ${podcastSection.title} is missing`);
          }
          return (
            <div key={i}>
              <iframe
                className="podcast"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
                title="Podcast"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
