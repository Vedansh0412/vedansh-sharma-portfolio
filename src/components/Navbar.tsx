import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./css/Navbar.css";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact Me",
    href: "#contact",
  },
  {
    label: "Blogs",
    href: "#blogs",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (href: string) => {
    setMobileOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="navbar-inner">
          <button
            className="navbar-logo"
            onClick={() => handleNavigation("#home")}
          >
            <span className="logo-mark">VS</span>
            <span className="logo-text">Vedansh Sharma</span>
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;