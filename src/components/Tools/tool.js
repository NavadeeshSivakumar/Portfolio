import React from "react";
import "./tool.css";
import aws from './aws.png'
// import git from './git.png'
import github from './github.png'
import postman from './postman.jpg'
import spring from './springboot.png'
import vscode from './vscode.jpeg'


const Tool = () => {
  return (
    <section id="tools">
      <span className="skillTitle">What I Use</span>
      <span className="skillDesc">
      "Navigate through the toolkit I wield, encompassing a diverse array of essential and advanced tools. From design software to development platforms, each tool represents a key asset in my repertoire, empowering me to craft impactful solutions with precision and efficiency."
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={vscode} alt="VSCODE" className="skillBarImg" />
          <div className="skillBarText">
            <h2>VS CODE</h2>
            <p>I am well-versed in utilizing VSCode, Microsoft's highly customizable source code editor, for efficient and effective development tasks.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={github} alt="GITHUB" className="skillBarImg" />
          <div className="skillBarText">
            <h2>GITHUB</h2>
            <p>I'm skilled in using GitHub for version control and collaboration in software development.</p>
          </div>
        </div>
        {
        //   <div className="skillBar">
        //   <img src={git} alt="GIT" className="skillBarImg" />
        //   <div className="skillBarText">
        //     <h2>GIT</h2>
        //     <p>I'm adept at using Git for version control, allowing for efficient tracking and management of changes in software development projects.</p>
        //   </div>
        // </div>
      }
        <div className="skillBar">
          <img src={postman} alt="POSTMAN" className="skillBarImg" />
          <div className="skillBarText">
            <h2>POSTMAN</h2>
            <p>I'm skilled in using Postman, an essential tool for testing and debugging APIs, streamlining development workflows and ensuring robust functionality.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={spring} alt="SPRINGTOOL" className="skillBarImg" />
          <div className="skillBarText">
            <h2>SPRING TOOL SUITE</h2>
            <p>I'm proficient in Spring Tool Suite (STS), simplifying Spring-based application development for enhanced productivity.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={aws} alt="AWS" className="skillBarImg" />
          <div className="skillBarText">
            <h2>AWS</h2>
            <p>I'm skilled in utilizing AWS, Amazon's cloud computing platform, for scalable and reliable application deployment and management.</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Tool;
