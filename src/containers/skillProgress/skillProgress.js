import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function StackProgress() {
  const barsRef = useScrollReveal({threshold: 0.3});
  if (techStack.viewSkillBars) {
    return (
      <div ref={barsRef} className="skills-container skill-bars-animate">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    );
  }
  return null;
}
