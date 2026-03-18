import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "./img/pic1.jpg";
import Image2 from "./img/pic2.jpg";
import Image3 from "./img/pic3.jpg";
import Image4 from "./img/pic4.jpg";
import Image5 from "./img/pic5.jpg";
import Image6 from "./img/pic6.jpg";
import Image7 from "./img/pic7.jpg";
import Image8 from "./img/pic8.jpg";
import Image9 from "./img/pic9.jpg";
import Image10 from "./img/pic10.jpg";
import translations from "./Changelang";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  details: string[];
  image: string;
  modalImage: string;
  link: string;
  description?: string;
}

interface ProjectsProps {
  lang: "ua" | "en";
  theme: string;
}

function Projects({ lang, theme }: ProjectsProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const translated = translations[lang];

  const projects: Project[] = [
    {
      title: translated.project1,
      details: translated.description1,
      image: Image1,
      modalImage: Image2,
      link: "https://garage-sigma.vercel.app/",
    },
    {
      title: translated.project2,
      details: translated.description2,
      image: Image3,
      modalImage: Image4,
      link: "https://relaxfocusite.vercel.app/"
    },
    {
      title: translated.project3,
      details: translated.description3,
      image: Image5,
      modalImage: Image6,
      link: "https://newstore-sepia.vercel.app/"
    },
    {
      title: translated.project4,
      details: translated.description4,
      image: Image7,
      modalImage: Image8,
      link: "https://coffee-store-bice.vercel.app/"
    },
    {
      title: translated.project5,
      details: translated.description5,
      image: Image9,
      modalImage: Image10,
      link: "https://food-pied-beta.vercel.app/"
    },
  ];

  const handleShowDetails = (project: Project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

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
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          scale: 1.02,
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
    <Container fluid id="projects" className={`project-section ${theme}-theme`} ref={sectionRef}>
      <h2 className="text-center">{translated.projects}</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4 perspective-container">
            <Card 
              className={`project-card ${theme}-theme`}
              ref={(el: any) => (cardsRef.current[index] = el)}
            >
              <Card.Img variant="top" src={project.image} className="project-image" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="project-buttons">
                  <Button variant="primary" onClick={() => handleShowDetails(project)}>
                    {translated.detail}
                  </Button>
                  <Button variant="success" href={project.link} target="_blank">
                    {translated.start}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal 
        show={showModal} 
        onHide={handleClose}
        centered
        size="lg"
        className={`custom-modal ${theme}-theme`}
      >
        <Modal.Header className={`modal-header-custom ${theme}-theme`}>
          <Modal.Title className="modal-title-custom">
            {currentProject?.title}
          </Modal.Title>
          <button 
            type="button" 
            className={`close-custom ${theme}-theme`} 
            onClick={handleClose}
            aria-label={translated.close}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className={`modal-body-custom ${theme}-theme`}>
          <div className="modal-content-wrapper">
            {currentProject?.modalImage && (
              <div className="modal-image-container">
                <img 
                  src={currentProject.modalImage}
                  alt={currentProject.title} 
                  className="modal-image"
                />
              </div>
            )}
            <div className="modal-text-content">
              {currentProject?.details.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`modal-footer-custom ${theme}-theme`}>
          <Button 
            variant="secondary" 
            onClick={handleClose}
            className="modal-close-btn"
          >
            {translated.close || "Close"}
          </Button>
          <Button 
            variant="primary" 
            href={currentProject?.link} 
            target="_blank"
            className="modal-action-btn"
          >
            {translated.start}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Projects;