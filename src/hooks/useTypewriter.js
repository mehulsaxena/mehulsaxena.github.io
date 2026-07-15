import {useState, useEffect} from "react";

/**
 * Types `text` out one character at a time. Splits by code points so emoji
 * are never rendered half-way. Respects prefers-reduced-motion by showing
 * the full text immediately.
 *
 * Returns {typed, done}.
 */
export default function useTypewriter(text, speed = 18, startDelay = 600) {
  const chars = Array.from(text);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const total = Array.from(text).length;
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(total);
      return;
    }
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount(current => {
          if (current >= total) {
            clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return {typed: chars.slice(0, count).join(""), done: count >= chars.length};
}
