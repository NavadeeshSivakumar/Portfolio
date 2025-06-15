import React from "react";
import "./about.css";
import html from "./html.png";
import css from "./css.png";
import react from "./react.png";
import java from "./java.png";
import springboot from "./springboot.png";
import postgres from "./postgres.png";
import mysql from "./mysql.png";

const About = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Know</span>
      <span className="skillDesc">
      "Embark on a journey through my versatile skill set, navigating through the realms of web development, database management, and backend frameworks. Each skill serves as a foundation, contributing to the depth and breadth of my expertise in crafting tailored solutions for various challenges."
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={html} alt="HTML" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML</h2>
            <p>HTML, the foundation of web development, structures content on the internet through tags and attributes.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={css} alt="CSS" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2>
            <p>CSS, or Cascading Style Sheets, beautifies web pages by styling HTML elements, enhancing their appearance and layout.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="REACT" className="skillBarImg" />
          <div className="skillBarText">
            <h2>REACT JS</h2>
            <p>React.js simplifies web development by efficiently managing user interfaces through its component-based architecture.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={java} alt="JAVA" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JAVA PROGRAMMING</h2>
            <p>Java programming enables versatile and scalable application development with its robust performance and extensive library support.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={springboot} alt="SPRINGBOOT" className="skillBarImg" />
          <div className="skillBarText">
            <h2>SPRINGBOOT</h2>
            <p>Spring Boot streamlines Java application development with its ready-to-use components, simplifying the creation of robust, production-grade applications.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={postgres} alt="POSTGRESQL" className="skillBarImg" />
          <div className="skillBarText">
            <h2>POSTGRE SQL</h2>
            <p>PostgreSQL is a reliable open-source relational database management system (RDBMS) widely used for its advanced features and flexibility in managing data.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mysql} alt="MYSQL" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MYSQL</h2>
            <p>MySQL is a popular open-source RDBMS prized for its ease of use and scalability, making it a preferred choice for various applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
