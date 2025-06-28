// hooks/useScrollAnimation.ts
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollAnimation(triggerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = triggerRef.current;

    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".blog-card"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [triggerRef]);
}
