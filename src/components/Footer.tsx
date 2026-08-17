import { Mail, ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "../components/css/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <strong>AI Driver - Software Engineer</strong>

          <span>
            Building intelligent software for the future.
          </span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
            <FaGithub size={18} />
            </a>

            <a
            href="https://www.linkedin.com/in/sharma-vedansh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
            <FaLinkedinIn size={18} />
            </a>

          <a href="mailto:your.email@example.com">
            <Mail size={17} />
          </a>

          <button onClick={scrollToTop}>
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 — All rights reserved.</span>

        <span>Designed & engineered with curiosity.</span>
      </div>
    </footer>
  );
}

export default Footer;