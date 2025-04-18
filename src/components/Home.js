import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./styles/Home.css";
import Video from "./video/hacker.mp4";

function Home() {
  return (
    <Container className="home-container">
      <div className="home-page">
        <motion.video
          src={Video}
          className="video"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </Container>
  );
}

export default Home;
