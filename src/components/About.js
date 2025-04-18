import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import translations from "./Changelang.js";
import "./styles/About.css";
import Photo from "./img/Iam.jpg";

function About({ lang }) {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const handleMouseOver = (event) => {
      if (event.target.tagName !== "SPAN") return;

      event.target.classList.remove("reset");
      event.target.classList.add("active");

      setTimeout(() => {
        event.target.classList.remove("active");
        event.target.classList.add("reset");
      }, 2000);
    };

    textElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      textElement.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const spans = textElement.querySelectorAll("span");
    if (spans.length === 0) {
      const paragraphs = textElement.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        paragraph.innerHTML = paragraph.textContent.replace(/\S/g, "<span>$&</span>");
      });
    }
  }, [lang]);

  return (
    <Container fluid id="about">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image src={Photo} roundedCircle fluid alt="Моє фото" />
        </Col>
        <Col md={8} className="about">
          <h2>{translations[lang].about}</h2>
          <div ref={textRef} className="text">
            {translations[lang].aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
