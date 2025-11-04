import "./intro.css";
import computer from "./computer.gif";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Navadeesh</span> <br /> Software Engineer
        </span>
        <p className="introPara">
          An enthusiastic student developer with strong problem-solving skills
          and <br />a knack for adapting to advanced technologies. Excited to
          further develop <br />skills and 
          contribute to the software industry
        </p>
      </div>
      <img src={computer} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
