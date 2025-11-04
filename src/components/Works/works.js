import React from "react";
import "./works.css";
import leaf from "./leaf.jpg";
import content from "./content.jpg";
import movie from "./movie.jpg";
import et from "./et.jpg"


const Works = () => {

  const descriptions = {
    leaf: "An online platform designed to support novice farmers in optimizing plant health and cultivation practices, utilizing state-of-the-art technology and comprehensive resources.",
    content: "A prototype of a social media application inspired by Intsagram, showcasing innovative features and functionalities aimed at simluating a user-friendly and engaging experience.",
    movie: "A rudimentary console based application incorporating object oriented programming principles to facilitate comprehensive movie rental system operations, seamlessly integrated with a graphical user interface (GUI) for enhanced user interaction and experience.",
    et: "An AI-powered personal finance app that automatically analyzes, categorizes, and predicts your spending habits to help you manage money smarter and achieve your financial goals effortlessly."
  }

  return (
    <section id="works">
      <h2 className="worksTitle">What I Did</h2>
      <span className="worksDesc">
      "Explore my collection of projects, each offering a glimpse into my diverse skills and expertise. From designs to developments, there's something for everyone to discover and enjoy."
        <div className="worksImgs">
          <div className="worksImgContainer">
            <img src={leaf} alt={descriptions.leaf} className="worksImg" />
            <p className="description"><h1>PROLEAFIC</h1>{descriptions.leaf}<h5>Front-end Developer.
            Winner of Best Sustainable Hack at Hack@Skcet from over 400+ submissions.</h5></p>
          </div>
          <div className="worksImgContainer">
            <img src={content} alt={descriptions.content} className="worksImg" />
            <p className="description"><h1>CONTENT MANAGEMENT APPLICATION</h1>{descriptions.content}<h5>Full Stack Developer - SpringBoot, MySQL, React.</h5></p>
          </div>
          <div className="worksImgContainer">
            <img src={movie} alt={descriptions.movie} className="worksImg" />
            <p className="description"><h1>MOVIE RENTAL SYSTEM</h1>{descriptions.movie}<h5>Database design and Development - MySQL, Java.</h5></p>
          </div>
          <div className="worksImgContainer">
            <img src={et} alt={descriptions.et} className="worksImg" />
            <p className="description"><h1>SMART EXPENSE TRACKER</h1>{descriptions.et}<h5>Full Stack Developer - MySQL, Java, AI/ML.</h5></p>
          </div>
        </div>
      </span>
    </section>
  );
};

export default Works;
