import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import Skills from "./Skills";
import "../components/css/About.css";

const skills = [
  {
    name: "React",
    icon: "/Skills/react.png",
  },
  {
    name: "TypeScript",
    icon: "/Skills/typescript.png",
  },
  {
    name: "JavaScript",
    icon: "/Skills/javascript.png",
  },
  {
    name: "Node.js",
    icon: "/Skills/nodejs.png",
  },
  {
    name: "Python",
    icon: "/Skills/python.png",
  },
  {
    name: "AI / ML",
    icon: "/Skills/openai.png",
  },
  {
    name: "Git",
    icon: "/Skills/git.png",
  },
  {
    name: "Azure",
    icon: "/Skills/azure.png",
  },
  {
    name: "Material UI",
    icon: "/Skills/mui.png",
  },
  {
    name: "Github",
    icon: "/Skills/github.png",
  },
  {
    name: "CSS",
    icon: "/Skills/css.png",
  },
  {
    name: "HTML",
    icon: "/Skills/html.png",
  },
  {
    name: "NEXT JS",
    icon: "/Skills/nextjs.png",
  },
  {
    name: "Postgress SQL",
    icon: "/Skills/postgress.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/Skills/tailwind.png",
  },
  {
    name: "VS Code",
    icon: "/Skills/vscode.png",
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">01 — About me</div>

        <div className="about-header">
          <motion.h2
            className="section-title"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            Software engineer.
            <br />
            <span className="muted-text">
              AI enthusiast.
            </span>
            <br />
            Builder.
          </motion.h2>

          <div className="about-summary">
            <p>
              Software Engineer with 2+ years of experience building scalable, customer-centric web applications using React, TypeScript, and
modern frontend architectures. Specialized in designing AI-powered developer tools.
            </p>

            <div className="about-location">
              <MapPin size={15} />

              <span>India</span>
            </div>

            <a
              href="/resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-block">
            <span className="block-number">01</span>

            <h3>Experience</h3>

            <div className="timeline-item">
              <div className="timeline-dot" />

              <div>
                <h4>Software Engineer</h4>

                <span>Tavant Technologies</span>

                <small>2024 — Present</small>

                <p>
                  Building production-grade frontend systems,
                  reporting applications and AI-assisted
                  engineering workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="about-block">
            <span className="block-number">02</span>

            <h3>Education</h3>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
              <h4>B.Tech — Computer Science</h4>

              <span>Jaypee Institute of Information Technology</span>

              <small>2020 — 2024</small>

              <p>
                Computer Science with a focus on software
                engineering, machine learning and application
                development.
              </p>
              </div>
            </div>
          </div>
        </div>

        <Skills skills={skills} />
      </div>
    </section>
  );
}

export default About;