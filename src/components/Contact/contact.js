import { useRef } from "react";
import "./contact.css";
import resume from "./documents.png";
import git from "./github.png";
import linkedin from "./linkedin.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ult2nii", "template_br1ssaj", form.current, {
        publicKey: "s-xFR-a71eKs-7xXB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="resume">
        <h1 className="contactPageTitle">My Resume</h1>
        <p className="resumeDesc">
          "Explore my professional synopsis, presenting a comprehensive overview
          of my skills, experience, and achievements."
        </p>
        <br/>
        <a
          href="https://drive.google.com/uc?export=download&id=1h2ga8MER6SO-JaOHs7exg7cAccHFWqnp"
          
          download
        >
          <img src={resume} alt="resume" className="resumeImg" />
        </a>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Your Message Matters</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/NavadeeshSivakumar">
              <img src={git} alt="github" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/navadeesh-sivakumar-70b854226">
              <img src={linkedin} alt="linkedin" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
