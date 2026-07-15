import {useRef, useLayoutEffect} from "react";

/**
 * Scroll-reveal hook that is safe by default: content stays fully visible
 * unless the browser can actually animate it (IntersectionObserver available
 * and the user has not requested reduced motion). The hidden state is applied
 * from JS only, so nothing can be stuck invisible — the failure mode of the
 * old react-reveal integration on mobile.
 *
 * Usage: const ref = useScrollReveal();
 *        <div ref={ref} className="reveal-up">...</div>
 * Direction classes: reveal-up | reveal-left | reveal-right | reveal-zoom
 * Add reveal-stagger to animate direct children one after another.
 */
export default function useScrollReveal(options) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.classList.add("reveal-pending");
    const activate = () => {
      node.classList.remove("reveal-pending");
      node.classList.add("reveal-active");
    };

    // Already on screen when mounted (late-mounting sections, tall viewports):
    // reveal right away instead of waiting for an observer callback.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      activate();
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activate();
            observer.disconnect();
          }
        });
      },
      {
        threshold: (options && options.threshold) || 0,
        rootMargin: (options && options.rootMargin) || "0px 0px -10% 0px"
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
