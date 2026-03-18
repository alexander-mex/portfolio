import React, { useEffect, useRef, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import translations from "./Changelang";
import "./styles/Hero.css";

interface HeroProps {
  lang: "ua" | "en";
  theme: string;
}

function Hero({ lang, theme }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [displayedRole, setDisplayedRole] = useState('');
  const [displayedDesc, setDisplayedDesc] = useState('');
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const texts = {
    greeting: translations[lang].heroGreeting,
    name: translations[lang].heroName,
    role: translations[lang].heroRole,
    desc: translations[lang].heroDesc
  };

  const typeText = useCallback((setter: React.Dispatch<React.SetStateAction<string>>, text: string, speed = 100, callback?: () => void) => {
    let i = 0;
    const timer = setInterval(() => {
      setter(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, speed);
    typingTimeoutRef.current = timer;
  }, []);

  const startTypingSequence = useCallback(() => {
    typeText(setDisplayedGreeting, texts.greeting, 50, () => {
      setTimeout(() => {
        typeText(setDisplayedName, texts.name, 40, () => {
          setTimeout(() => {
            typeText(setDisplayedRole, texts.role, 40, () => {
              setTimeout(() => {
                typeText(setDisplayedDesc, texts.desc, 30);
              }, 500);
            });
          }, 500);
        });
      }, 800);
    });
  }, [texts.greeting, texts.name, texts.role, texts.desc, typeText]);

  const createParticles = useCallback(() => {
    const container = particlesContainerRef.current;
    if (!container) return;

    // Create 20 particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = particle.style.height = `${Math.random() * 8 + 4}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = (Math.random() * 0.6 + 0.2).toString();
      container.appendChild(particle);
      particlesRef.current.push(particle);
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      // === Typing та старі частинки (залишаємо без змін) ===
      const typingTl = gsap.delayedCall(0.3, startTypingSequence);
      createParticles();

      particlesRef.current.forEach((particle, i) => {
        gsap.to(particle, { /* ваш існуючий код */ });
      });


      // === АНІМАЦІЯ ПЛАВАЮЧИХ ФІГУР (Постійна та Об'ємна) ===
      document.querySelectorAll('.floating-shape').forEach((shape, i) => {
        // Повільне обертання та погойдування в просторі
        gsap.to(shape, {
          y: '+=40',
          x: '+=30',
          rotationY: 360,
          rotationX: 180,
          scale: 1 + Math.random() * 0.2,
          duration: 12 + i * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
          force3D: true
        });
      });

      return () => {
        if (typingTimeoutRef.current) clearInterval(typingTimeoutRef.current);
        typingTl.kill();
        particlesRef.current.forEach(p => p.remove());
        particlesRef.current = [];
      };
    });

    return () => ctx.revert();
  }, [lang, startTypingSequence, createParticles]);

  return (
    <div id="hero" className={`hero-container ${theme}-theme`} ref={heroRef}>
      <div className="particles-container" ref={particlesContainerRef}></div>
      <div className="hero-bg"></div>
      <div className="hero-bg-layer-2"></div>
      {/* 3D FLOATING SHAPES */}
      <div className="floating-shapes">
        {/* Sphere 1 (Wireframe 3D) */}
        <div className="floating-shape shape-circle" style={{ left: '12%', top: '25%' }}>
          <div className="circle-ring"></div>
          <div className="circle-ring"></div>
          <div className="circle-ring"></div>
        </div>
        
        {/* Cube 1 (6 faces) */}
        <div className="floating-shape shape-cube" style={{ left: '78%', top: '18%' }}>
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>

        {/* Sphere 3 (Replaced Crystal) */}
        <div className="floating-shape shape-circle" style={{ left: '25%', top: '68%', transform: 'scale(0.8)' }}>
          <div className="circle-ring"></div>
          <div className="circle-ring"></div>
          <div className="circle-ring"></div>
        </div>

        {/* Sphere 2 */}
        <div className="floating-shape shape-circle" style={{ left: '65%', top: '72%', transform: 'scale(0.6)' }}>
          <div className="circle-ring"></div>
          <div className="circle-ring"></div>
          <div className="circle-ring"></div>
        </div>

        {/* Cube 2 */}
        <div className="floating-shape shape-cube" style={{ left: '35%', top: '5%', transform: 'scale(0.7)' }}>
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <div className="hero-content text-center">
          <h2 className="hero-greeting">
            {displayedGreeting}
          </h2>
          <h1 className="hero-name">{displayedName}</h1>
          <h3 className="hero-role">{displayedRole}</h3>
          <p className="hero-desc">{displayedDesc}</p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

