import React from "react";
import { Container } from "react-bootstrap";
import translations from "./Changelang";

interface FooterProps {
  lang: "ua" | "en";
  toggleLanguage: () => void;
}

function Footer({ lang, toggleLanguage }: FooterProps) {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="footer-container">
        <p className="mb-0 footer-text">
          © {new Date().getFullYear()} {translations[lang].copyright}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;