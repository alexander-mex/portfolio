import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import translations from "./Changelang";
import "./styles/Story.css";

gsap.registerPlugin(ScrollTrigger);

interface StoryProps {
  lang: "ua" | "en";
  theme: string;
}

function Story({ lang, theme }: StoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const storyItems = [
    { year: "2021", text: translations[lang].storyContext1 },
    { year: "2022-2023", text: translations[lang].storyContext2 },
    { year: "2024", text: translations[lang].storyContext3 },
  ];

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <Container fluid id="story" className={`story-container ${theme}-theme`} ref={containerRef}>
      <h2 className="text-center mb-5">{translations[lang].storyTitle}</h2>
      <div className="timeline">
        {storyItems.map((item, index) => (
          <div 
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} 
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
          >
            <div className="timeline-content text-center">
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Story;
