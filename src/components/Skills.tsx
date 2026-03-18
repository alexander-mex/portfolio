import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import translations from "./Changelang";
import "./styles/Skills.css";

gsap.registerPlugin(ScrollTrigger);

interface SkillsProps {
  lang: "ua" | "en";
  theme: string;
}

function Skills({ lang, theme }: SkillsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "GSAP", icon: "✨" },
    { name: "Three.js", icon: "🧊" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Git", icon: "📦" }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    const mouseHandlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 500,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
      
      mouseHandlers.set(card, { move: handleMouseMove, leave: handleMouseLeave });
    });

    return () => {
      mouseHandlers.forEach((handlers, card) => {
        card.removeEventListener("mousemove", handlers.move);
        card.removeEventListener("mouseleave", handlers.leave);
      });
    }
  }, []);

  return (
    <Container fluid id="skills" className={`skills-section ${theme}-theme`} ref={sectionRef}>
      <h2 className="text-center mb-5">{translations[lang].skillsTitle}</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="mb-4">
            <div 
              className={`skill-card ${theme}-theme`} 
              ref={(el) => { cardsRef.current[index] = el; }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
