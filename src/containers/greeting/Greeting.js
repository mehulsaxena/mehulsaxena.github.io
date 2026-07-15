import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import useTypewriter from "../../hooks/useTypewriter";
import NeuralBackground from "../../components/neuralBackground/NeuralBackground";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {typed, done} = useTypewriter(greeting.subTitle);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main sci-fi-section sci-fi-aurora" id="greeting">
      <NeuralBackground />
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div className="hero-cascade">
            <h1
              className={
                isDark
                  ? "dark-mode greeting-text gradient-shimmer"
                  : "greeting-text gradient-shimmer"
              }
            >
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p typewriter-wrap"
                  : "greeting-text-p subTitle typewriter-wrap"
              }
            >
              <span className="typewriter-sizer" aria-hidden="true">
                {emoji(greeting.subTitle)}
              </span>
              <span className="typewriter-live">
                {emoji(typed)}
                {!done && <span className="typewriter-caret"></span>}
              </span>
            </p>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div hero-image-entrance">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
