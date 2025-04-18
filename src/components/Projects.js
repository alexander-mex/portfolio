import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./styles/Project.css";
import Image1 from "./img/pic1.jpg";
import Image2 from "./img/pic2.jpg";
import translations from "./Changelang.js";

function Projects({ lang, theme }) {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const translated = translations[lang];

  const projects = [
    {
      title: translated.project,
      details: translated.description,
      image: Image1,
      modalImage: Image2,
      link: "https://garage-sigma.vercel.app/",
    },
    // Add other projects as needed
  ];

  const handleShowDetails = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  console.log("Theme received in Project:", theme);

  return (
    <Container fluid id="projects" className={`project-section ${theme}-theme`}>
      <h2 className="text-center">{translated.projects}</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className={`project-card ${theme}-theme`}>
              <Card.Img variant="top" src={project.image} className="project-image" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShowDetails(project)}>
                  {translated.detail}
                </Button>{" "}
                <Button variant="success" href={project.link} target="_blank">
                  {translated.start}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Custom Modal */}
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
              <p>{currentProject?.details}</p>
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