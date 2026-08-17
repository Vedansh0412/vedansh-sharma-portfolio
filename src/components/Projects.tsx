import {
  ArrowLeft,
  ArrowRight,
//   ArrowUpRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import "./css/Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [direction, setDirection] =
    useState(1);

  const totalProjects = projects.length;

  const goToProject = (index: number) => {
    if (index < 0 || index >= totalProjects) {
      return;
    }

    setDirection(
      index > currentIndex ? 1 : -1
    );

    setCurrentIndex(index);
  };

  const previousProject = () => {
    if (currentIndex === 0) {
      return;
    }

    setDirection(-1);

    setCurrentIndex(
      (previous) => previous - 1
    );
  };

  const nextProject = () => {
    if (
      currentIndex ===
      totalProjects - 1
    ) {
      return;
    }

    setDirection(1);

    setCurrentIndex(
      (previous) => previous + 1
    );
  };

  const currentProject =
    projects[currentIndex];

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="projects-header">

          <div>
            <div className="section-label">
              02 — Selected work
            </div>

            <h2>
              Things I've
              <br />

              <span>
                built & shipped.
              </span>
            </h2>
          </div>

          <div className="projects-header-right">

            <p>
              A selection of products,
              experiments and systems where
              software engineering meets
              intelligent technology.
            </p>

            <div className="projects-counter">

              <span>
                {String(
                  currentIndex + 1
                ).padStart(2, "0")}
              </span>

              <span className="counter-divider">
                /
              </span>

              <span>
                {String(
                  totalProjects
                ).padStart(2, "0")}
              </span>

            </div>

          </div>

        </div>


        {/* ==========================================
            CAROUSEL
        ========================================== */}

        <div className="projects-carousel">

          <div className="projects-carousel-window">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >

              <motion.article
                key={currentProject.id}
                className={`project-carousel-card ${
                  currentProject.featured
                    ? "project-card-featured"
                    : ""
                }`}
                custom={direction}
                initial={{
                  opacity: 0,
                  x:
                    direction > 0
                      ? 100
                      : -100,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x:
                    direction > 0
                      ? -100
                      : 100,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.5,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.15}
                onDragEnd={(
                  _,
                  info
                ) => {
                  if (
                    info.offset.x < -60
                  ) {
                    nextProject();
                  }

                  if (
                    info.offset.x > 60
                  ) {
                    previousProject();
                  }
                }}
              >

                {/* ==================================
                    PROJECT VISUAL
                ================================== */}

                <div className="project-carousel-visual">

                  <div className="project-card-number">
                    {String(
                      currentIndex + 1
                    ).padStart(2, "0")}
                  </div>

                  {currentProject.featured && (
                    <span className="featured-label">
                      Featured
                    </span>
                  )}

                  <div className="project-orbit">

                    <div className="orbit-core" />

                    <div className="orbit-ring orbit-ring-1" />

                    <div className="orbit-ring orbit-ring-2" />

                    <div className="orbit-ring orbit-ring-3" />

                  </div>

                  <span className="project-year">
                    {currentProject.year}
                  </span>

                </div>


                {/* ==================================
                    PROJECT CONTENT
                ================================== */}

                <div className="project-carousel-content">

                  <div className="project-carousel-main">

                    <span className="project-category">
                      {currentProject.category}
                    </span>

                    <h3>
                      {currentProject.title}
                    </h3>

                    <p>
                      {
                        currentProject.description
                      }
                    </p>

                  </div>


                  <div className="project-card-footer">

                    <div className="project-tech">

                      {currentProject.technologies.map(
                        (technology) => (
                          <span
                            key={
                              technology
                            }
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                    {/* <button
                      className="project-open-button"
                      aria-label={`View ${currentProject.title}`}
                    >
                      <ArrowUpRight
                        size={18}
                      />
                    </button> */}

                  </div>

                </div>

              </motion.article>

            </AnimatePresence>

          </div>


          {/* ==========================================
              NAVIGATION
          ========================================== */}

          <div className="projects-carousel-controls">

            <button
              className="carousel-arrow"
              onClick={
                previousProject
              }
              disabled={
                currentIndex === 0
              }
              aria-label="Previous project"
            >
              <ArrowLeft
                size={17}
              />
            </button>


            {/* Dots */}

            <div className="carousel-dots">

              {projects.map(
                (_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${
                      index ===
                      currentIndex
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      goToProject(
                        index
                      )
                    }
                    aria-label={`Go to project ${
                      index + 1
                    }`}
                  />
                )
              )}

            </div>


            <button
              className="carousel-arrow"
              onClick={
                nextProject
              }
              disabled={
                currentIndex ===
                totalProjects - 1
              }
              aria-label="Next project"
            >
              <ArrowRight
                size={17}
              />
            </button>

          </div>


          {/* ==========================================
              DRAG HINT
          ========================================== */}

          <div className="projects-drag-hint">
            <span>
              ←
            </span>

            <span>
              Drag to explore
            </span>

            <span>
              →
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;