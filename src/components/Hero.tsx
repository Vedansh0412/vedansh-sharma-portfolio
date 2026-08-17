import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./css/Hero.css";

function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="hero">
      <motion.div
        className="hero-background"
        style={{
          y,
        }}
      >
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-grid" />
      </motion.div>

      <motion.div
        className="container hero-content"
        style={{
          opacity,
        }}
      >
        <motion.div
          className="availability"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        >
          <span className="availability-dot" />

          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 55,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          I engineer
          <br />

          <span className="gradient-text">
            intelligent software.
          </span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.65,
            duration: 0.8,
          }}
        >
          AI-powered software engineer building intelligent,
          scalable and beautifully crafted digital experiences
          at the intersection of software engineering and AI.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
        >
          <a href="#projects" className="primary-button">
            Explore my work
            <ArrowUpRight size={17} />
          </a>

          <a href="#contact" className="secondary-button">
            Let's connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;