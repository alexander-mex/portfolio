import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import translations from "./Changelang";
import "./styles/Contact.css";

function Contact({ lang }) { 
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
    alert(`${translations[lang].gratitude} ${formData.name}! ${translations[lang].alertMes}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main>
    <Container id="contact" className={`contact-container ${isVisible ? "fade-in" : ""} ${isSubmitted ? "sent" : ""}`}>
      <h2>{translations[lang].contact}</h2>
      <p className="text-center">{translations[lang].info}</p>

      <div className="contact-info">
        <p><strong>📍 {translations[lang].city}</strong> {translations[lang].cityName}</p>
        <p><strong>📧 Email:</strong> example@email.com</p>
      </div>

      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="name">
          <Form.Label>{translations[lang].name}</Form.Label>
          <Form.Control
            type="text"
            placeholder={translations[lang].name}
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 submit-btn">
          {translations[lang].send}
        </Button>
      </Form>
    </Container>
    </main>
  );
}

export default Contact;
