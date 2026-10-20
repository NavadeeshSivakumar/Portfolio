import { useRef } from "react";
import "./works.css";
import useScrollReveal from "../Scroll/useScrollReveal";
import defaultImg from "./image.png";

const projects = [
  {
    img: defaultImg,
    title: "Expense Tracker Web App",
    role: "Full Stack Developer",
    description:
      "Full-stack expense management system with a multi-agent AI pipeline; three specialised LangChain/LangGraph agents collaboratively analyse spending patterns, recommend reductions, and generate personalised savings plans.",
    tags: ["Python", "React", "Flask", "MySQL", "LangChain", "LangGraph"],
  },
  {
    img: defaultImg,
    title: "Indian Politics Analyst — RAG Console App",
    role: "AI Engineer",
    description:
      "CLI-based RAG system using Sentence Transformers for semantic search and Groq's LLaMA 3.3 70B for contextual Q&A, over a curated knowledge base on Indian and Tamil Nadu politics.",
    tags: ["Python", "Sentence Transformers", "Groq API", "LLaMA 3.3 70B"],
  },
  {
    img: defaultImg,
    title: "Financial Distress Prediction System",
    role: "ML Engineer",
    description:
      "Prediction model using Random Forest, Decision Trees, and KNN with network analysis techniques, achieving 90% accuracy; validated using ROC curve, precision, and recall metrics.",
    tags: ["Python", "Scikit-learn", "MySQL"],
  },
];

const Works = () => {
  const revealRef = useRef(null);
  useScrollReveal(revealRef);

  return (
    <section id="works" ref={revealRef}>
      <h2 className="worksTitle" data-reveal>
        What I Did
      </h2>
      <p
        className="worksDesc"
        data-reveal
        style={{ "--reveal-delay": "80ms" }}
      >
        "Explore my collection of projects, each offering a glimpse into my
        diverse skills and expertise. From designs to developments, there's
        something for everyone to discover and enjoy."
      </p>

      <div className="worksGrid">
        {projects.map((project, index) => (
          <div
            className="workCard"
            key={project.title}
            data-reveal
            style={{ "--reveal-delay": `${140 + index * 140}ms` }}
          >
            <div className="workCardImgWrap">
              <img
                src={project.img}
                alt={project.title}
                className="workCardImg"
              />
            </div>
            <div className="workCardBody">
              <h3 className="workCardTitle">{project.title}</h3>
              <span className="workCardRole">{project.role}</span>
              <p className="workCardDesc">{project.description}</p>
              <div className="workCardTags">
                {project.tags.map((tag) => (
                  <span className="workTag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;