import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import translations from "./Changelang";
import Photo from "./img/Iam.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  lang: "ua" | "en";
  theme: string;
}

function About({ lang, theme }: AboutProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName !== "SPAN") return;

      target.style.color = "#00bfff";
      target.style.transform = "translateY(-5px) scale(1.2)";
      target.style.transition = "all 0.3s ease";

      setTimeout(() => {
        target.style.color = "";
        target.style.transform = "";
      }, 1000);
    };

    textElement.addEventListener("mouseover", handleMouseOver);

    const photoElement = photoRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!photoElement) return;
      const rect = photoElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      gsap.to(photoElement, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
        overwrite: true
      });
    };

    const handleMouseLeave = () => {
      if (!photoElement) return;
      gsap.to(photoElement, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true
      });
    };

    if (photoElement) {
      photoElement.addEventListener("mousemove", handleMouseMove);
      photoElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      textElement.removeEventListener("mouseover", handleMouseOver);
      if (photoElement) {
        photoElement.removeEventListener("mousemove", handleMouseMove);
        photoElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const spans = textElement.querySelectorAll("span");
    if (spans.length === 0) {
      const paragraphs = textElement.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        if (paragraph.textContent) {
          paragraph.innerHTML = paragraph.textContent.replace(/\S/g, "<span>$&</span>");
        }
      });
    }

    // GSAP Scroll Animation
    gsap.fromTo(
      "#about",
      { opacity: 0, scale: 0.8, rotation: -10 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [lang]);

  return (
    <Container fluid id="about" className="section-padding">
      <Row className="align-items-center">
        <Col md={4} className={`text-center ${theme}-theme`} style={{ perspective: "1000px" }}>
          <Image src={Photo} fluid alt="Моє фото" ref={photoRef} style={{ transition: "none" }} />
        </Col>
        <Col md={8} className="about">
          <h2>{translations[lang].about}</h2>
          <div ref={textRef} className="text">
            {translations[lang].aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <a 
            href="https://cv-beta-swart.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-button"
          >
            <span className="cv-icon">📄</span>
            {translations[lang].cvButton}
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
