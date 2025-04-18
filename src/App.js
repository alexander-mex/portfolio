import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import translations from "./components/Changelang";
import "./components/styles/App.css";
import Logo from "./components/img/logo.jpg";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ua");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "ua" ? "en" : "ua"));
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">{translations[lang].home}</Nav.Link>
                <Nav.Link href="/about">{translations[lang].about}</Nav.Link>
                <Nav.Link href="/projects">{translations[lang].projects}</Nav.Link>
                <Nav.Link href="/contact">{translations[lang].contact}</Nav.Link>
              </Nav>
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? translations[lang].theme_dark : translations[lang].theme_light}
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/projects" element={<Projects lang={lang} theme={theme} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} toggleLanguage={toggleLanguage} />
      </div>
    </Router>
  );
}

export default App;