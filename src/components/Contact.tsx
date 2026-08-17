import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "../components/css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-glow" />

      <div className="container">
        <div className="section-label">04 — Contact</div>

        <motion.div
          className="contact-content"
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
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h2>
            Have an idea?
            <br />

            <span>Let's build it.</span>
          </h2>

          <p>
            Whether you're building an AI product, a complex
            software system, or simply want to discuss an
            interesting idea — I'd love to hear from you.
          </p>

          <a
            href="mailto:mailtovedansh7@gmail.com"
            className="primary-button contact-button"
          >
            <Mail size={17} />

            Start a conversation

            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;