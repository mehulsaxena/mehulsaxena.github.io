import React, {useContext, useEffect, useRef} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const index = parseInt(card.dataset.index, 10);
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add("animate-in");
            observer.unobserve(card);
          }
        });
      },
      {threshold: 0.05}
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="experience-container sci-fi-aurora" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <div
                    key={i}
                    data-index={i}
                    ref={el => (cardRefs.current[i] = el)}
                    className="experience-card-wrapper"
                  >
                    <ExperienceCard
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
