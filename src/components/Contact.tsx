import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import translations from "./Changelang";
const publicEmail = process.env.REACT_APP_EMAIL;

interface ContactProps {
  lang: "ua" | "en";
  theme: string;
}

interface ModalInfo {
  show: boolean;
  title: string;
  message: string;
  variant: string;
}

function Contact({ lang, theme }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({ show: false, title: "", message: "", variant: "" });
  const formContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);

    if (formContainerRef.current) {
      gsap.fromTo(
        formContainerRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const handleCloseModal = () => setModalInfo({ ...modalInfo, show: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setModalInfo({
        show: true,
        title: translations[lang].error,
        message: translations[lang].invalidEmail,
        variant: "danger"
      });
      return;
    }
  
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setModalInfo({
          show: true,
          title: translations[lang].gratitude + ` ${formData.name}!`,
          message: translations[lang].alertMes,
          variant: "success"
        });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 2000);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setModalInfo({
          show: true,
          title: translations[lang].error,
          message: translations[lang].alertWrong,
          variant: "danger"
        });
      }
    } catch (error) {
      console.error(translations[lang].errorSent, error);
      setModalInfo({
        show: true,
        title: translations[lang].error,
        message: translations[lang].alertServer,
        variant: "danger"
      });
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <Container
          id="contact"
          fluid="md"
          className={`contact-container ${isVisible ? "fade-in" : ""} ${isSubmitted ? "sent" : ""}`}
          ref={formContainerRef}
        >
        <Row>
          <Col xs={12}>
            <h2>{translations[lang].contact}</h2>
            <p className="text-center">{translations[lang].info}</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6} className="mx-auto">
            <div className="contact-info text-center">
              <p>
                <strong>📍 {translations[lang].city}</strong> {translations[lang].cityName}
              </p>
              <p>
              <strong>📧 Email:</strong> {publicEmail}
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8} lg={10} className="mx-auto">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="name">
                <Form.Label>{translations[lang].name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={translations[lang].name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange as any}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>{translations[lang].email}</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={translations[lang].email}
                  name="email"
                  value={formData.email}
                  onChange={handleChange as any}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>{translations[lang].message}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder={translations[lang].message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange as any}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 w-10 mx-auto d-block submit-btn">
                {translations[lang].send}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
        <Modal
          show={modalInfo.show}
          onHide={handleCloseModal}
          centered
          className={`custom-modal ${theme || 'light'}-theme`}
        >
          <Modal.Header className={`modal-header-custom ${theme}-theme`}>
            <Modal.Title className="modal-title-custom">
              {modalInfo.title}
            </Modal.Title>
            <button
              type="button"
              className="close-custom"
              onClick={handleCloseModal}
              aria-label={translations[lang].close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body className={`modal-body-custom ${theme}-theme`}>
            <div className="modal-content-wrapper">
              <div className="modal-text-content">
                <p>{modalInfo.message}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className={`modal-footer-custom ${theme}-theme`}>
            <Button
              variant={modalInfo.variant === "success" ? "success" : "danger"}
              onClick={handleCloseModal}
              className="modal-close-btn"
            >
              {translations[lang].close}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Contact;
