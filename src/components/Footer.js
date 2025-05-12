import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import translations from "./Changelang";
import './styles/Footer.css';

function Footer({ lang, toggleLanguage }) {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="footer-container">
        <p className="mb-0 footer-text">
          © {new Date().getFullYear()} {translations[lang].copyright}
        </p>
        <button className="language-toggle" onClick={toggleLanguage}>
          {lang === "ua" ? "🇬🇧 EN" : "🇺🇦 UA"}
        </button>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default Footer;