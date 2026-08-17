import { useEffect, useRef } from "react";
import "./css/Skills.css";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const globe = globeRef.current;

    if (!globe) {
      return;
    }

    let animationFrame = 0;

    let rotationX = -8;
    let rotationY = 0;

    const animate = () => {
      rotationY += 0.12;

      globe.style.transform = `
        rotateX(${rotationX}deg)
        rotateY(${rotationY}deg)
      `;

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  /*
   * Repeat skills so the globe remains visually dense
   * even when the user has only a limited number of skills.
   */
  const repeatedSkills = Array.from(
    {
      length: Math.max(36, skills.length * 4),
    },
    (_, index) => ({
      ...skills[index % skills.length],
      instance: index,
    })
  );

  /*
   * Arrange tiles around a sphere using latitude rings.
   */
  const getTilePosition = (
  index: number,
  total: number
) => {
  /*
   * Fibonacci sphere distribution.
   *
   * This places every tile evenly across the
   * surface of a sphere instead of using rows.
   */

  const radius = 245;

  /*
   * Golden angle.
   *
   * This prevents tiles from lining up vertically.
   */
  const goldenAngle =
    Math.PI * (3 - Math.sqrt(5));

  /*
   * Move from the top of the sphere to the bottom.
   *
   * +0.5 prevents tiles from sitting directly
   * on the poles.
   */
  const y =
    1 -
    ((index + 0.5) / total) * 2;

  /*
   * Radius of the current latitude.
   *
   * At the equator this is largest.
   * Near the poles it naturally becomes smaller.
   */
  const radiusAtY =
    Math.sqrt(1 - y * y);

  /*
   * Golden-angle longitude.
   */
  const theta =
    index * goldenAngle;

  /*
   * Convert spherical coordinates to Cartesian.
   */
  const x =
    Math.cos(theta) *
    radiusAtY *
    radius;

  const z =
    Math.sin(theta) *
    radiusAtY *
    radius;

  const yPosition =
    y * radius;

  /*
   * Orient the tile so that its surface is
   * tangent to the sphere.
   *
   * The tile starts facing +Z.
   */
  const rotateY =
    (Math.atan2(x, z) * 180) /
    Math.PI;

  const horizontalRadius =
    Math.sqrt(x * x + z * z);

  const rotateX =
    (Math.atan2(
      -yPosition,
      horizontalRadius
    ) *
      180) /
    Math.PI;

  return {
    x,
    y: yPosition,
    z,
    rotateX,
    rotateY,
  };
};

  return (
    <section className="skills-section">

      <div className="skills-heading">

        <div>
          <span className="block-number">
            03
          </span>

          <h3>
            Skills &
            <br />
            Technologies
          </h3>
        </div>

        <p>
          Technologies I use to turn ideas into
          intelligent, scalable and polished
          software.
        </p>

      </div>

      <div className="skills-globe-wrapper">

        <div className="skills-globe-glow" />

        <div
          ref={globeRef}
          className="skills-globe"
        >

          {repeatedSkills.map((skill, index) => {
  const position = getTilePosition(
    index,
    repeatedSkills.length
  );

  return (
    <div
      key={`${skill.name}-${skill.instance}`}
      className="skill-tile"
      style={{
        transform: `
          translate3d(
            ${position.x}px,
            ${position.y}px,
            ${position.z}px
          )
          rotateY(${position.rotateY}deg)
          rotateX(${position.rotateX}deg)
        `,
      }}
    >
      <div className="skill-tile-inner">
        <img
          src={skill.icon}
          alt=""
          draggable={false}
        />

        <span>{skill.name}</span>
      </div>
    </div>
  );
})}

        </div>

        <div className="skills-globe-shadow" />

      </div>

      <div className="skills-list">

        {skills.map((skill) => (
          <span
            key={skill.name}
            className="skills-list-item"
          >
            {skill.name}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Skills;