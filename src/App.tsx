import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import translations from "./components/Changelang";
import "./components/styles/App.css";
import Logo from "./components/img/logo.png";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState<"ua" | "en">((localStorage.getItem("lang") as "ua" | "en") || "ua");
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "ua" ? "en" : "ua"));
  };

  const closeMenu = () => setExpanded(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
        <Container>
          <Navbar.Brand 
            as={Link} 
            to="hero" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="d-flex align-items-center cursor-pointer"
            onClick={closeMenu}
          >
            <img
              src={Logo}
              alt="Logo"
              className="logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto d-flex justify-content-center">
              <Nav.Link as={Link} to="hero" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>{translations[lang].home}</Nav.Link>
              <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>{translations[lang].about}</Nav.Link>
              <Nav.Link as={Link} to="skills" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>{translations[lang].skillsTitle}</Nav.Link>
              <Nav.Link as={Link} to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>{translations[lang].projects}</Nav.Link>
              <Nav.Link as={Link} to="story" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>{translations[lang].storyTitle}</Nav.Link>
              <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>{translations[lang].contact}</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center ms-3">
              <button className="language-toggle" onClick={toggleLanguage}>
                {lang.toUpperCase()}
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="main-content">
        <Hero lang={lang} theme="dark" />
        <About lang={lang} theme="dark" />
        <Skills lang={lang} theme="dark" />
        <Projects lang={lang} theme="dark" />
        <Story lang={lang} theme="dark" />
        <Contact lang={lang} theme="dark" />
      </main>
      <Footer lang={lang} toggleLanguage={toggleLanguage} />
    </div>
  );
}

export default App;