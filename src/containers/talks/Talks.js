import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  const sectionRef = useScrollReveal();
  if (!talkSection.display) {
    return null;
  }
  return (
    <div ref={sectionRef} className="main reveal-up" id="talks">
      <div className="talk-header">
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode talk-header-subtitle"
              : "subTitle talk-header-subtitle"
          }
        >
          {talkSection.subtitle}
        </p>
        {talkSection.talks.map((talk, i) => {
          return (
            <TalkCard
              key={i}
              talkDetails={{
                title: talk.title,
                subtitle: talk.subtitle,
                slides_url: talk.slides_url,
                event_url: talk.event_url,
                image: talk.image,
                isDark
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
