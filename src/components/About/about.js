import { useRef } from "react";
import "./about.css";
import useScrollReveal from "../Scroll/useScrollReveal";
import html from "./html.png";
import css from "./css.png";
import react from "./react.png";
import java from "./java.png";
import springboot from "./springboot.png";
import postgres from "./postgres.png";
import mysql from "./mysql.png";

const skillGroups = [
  {
    category: "Backend",
    items: [
      { name: "Python" },
      { img: java, name: "Java" },
      { img: springboot, name: "Spring Boot" },
      { name: "FastAPI" },
      { name: "Flask" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG Pipelines" },
      { name: "Sentence Transformers" },
      { name: "Scikit-learn" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { img: react, name: "React" },
      { name: "JavaScript" },
      { img: html, name: "HTML" },
      { img: css, name: "CSS" },
    ],
  },
  {
    category: "Database",
    items: [
      { img: postgres, name: "PostgreSQL" },
      { img: mysql, name: "MySQL" },
    ],
  },
];

const getInitials = (name) =>
  name
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const About = () => {
  const revealRef = useRef(null);
  useScrollReveal(revealRef);

  return (
    <section id="skills" ref={revealRef}>
      {/* <span className="sectionEyebrow">// core_stack</span> */}

      <h2 className="skillTitle" data-reveal>
        My Tech Stack
      </h2>

      <p
        className="skillDesc"
        data-reveal
        style={{ "--reveal-delay": "80ms" }}
      >
        The technologies I use to build backend systems and AI-powered
        applications.
      </p>

      <div className="skillGroups">
        {skillGroups.map((group, index) => (
          <div
            className="skillGroup"
            key={group.category}
            data-reveal
            style={{ "--reveal-delay": `${120 + index * 100}ms` }}
          >
            <div className="skillGroupHeader">
              <h3 className="skillGroupLabel">{group.category}</h3>
              <span className="skillGroupLine" />
            </div>

            <div className="skillList">
              {group.items.map((item) => (
                <div className="skillChip" key={item.name}>
                  {item.img ? (
                    <img src={item.img} alt="" className="skillIcon" />
                  ) : (
                    <span className="skillInitials">
                      {getInitials(item.name)}
                    </span>
                  )}

                  <span className="skillName">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;