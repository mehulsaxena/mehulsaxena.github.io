import React, {useContext, useState, useEffect} from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const isLocal = window.location.hostname === "localhost";
    // counterapi.dev: /up increments + returns count; /get reads without incrementing
    const url = isLocal
      ? "https://api.counterapi.dev/v1/mehulsaxena/portfolio/get"
      : "https://api.counterapi.dev/v1/mehulsaxena/portfolio/up";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const val = data?.count ?? data?.value;
        if (typeof val === "number") setCount(val);
      })
      .catch(() => {}); // silently fail — no broken UI
  }, []);

  if (count === null) return null;

  return (
    <div className="visitor-counter">
      <span className="visitor-eye" aria-hidden="true">
        👁
      </span>
      <span className="visitor-number">{count.toLocaleString()}</span>
      <span className="visitor-label">profile views</span>
    </div>
  );
}

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("Made with ❤️ by Mehul Saxena")}
      </p>
      <VisitorCounter />
    </div>
  );
}
