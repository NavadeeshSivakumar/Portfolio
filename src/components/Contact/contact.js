import { useRef } from "react";
import "./contact.css";
import { FileText } from "lucide-react";
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
          form.current.reset();
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
          Explore my professional background, skills, experience, and
          achievements in one place.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1foRwRvxuo5oqB3ckBiOYKyy1zSTsUq4S"
          className="resumeLink"
          aria-label="Download my resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText className="resumeIcon" strokeWidth={1.5} />
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
            required
          />

          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="msg"
            required
          />

          <button type="submit" className="submitBtn">
            Submit
          </button>

          <div className="links">
            <a
              href="https://github.com/NavadeeshSivakumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <img src={git} alt="GitHub" className="link" />
            </a>

            <a
              href="https://www.linkedin.com/in/navadeesh-sivakumar-70b854226"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <img src={linkedin} alt="LinkedIn" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;