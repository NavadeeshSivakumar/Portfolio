import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contact from "./contact.jpg";
// import logo from "./logo.jpg";
import menu from "./menu.png";
import me from "./profile.jpg";
import fme from "./fprofile.jpg";

const Navbar = () => {
  // const [variableName, setvariableName] = useState();
  const [showMenu, setShowMenu] = useState(false);

  // function expandImage() {
  //   const fullImage = document.querySelector('.full-image-container');
  //   fullImage.style.display = 'block';
  // }

  function expandImage() {
    const fullImage = document.querySelector(".full-image-container");
    if (fullImage.style.display === "block") {
      fullImage.style.display = "none";
    } else {
      fullImage.style.display = "block";
    }

    fullImage.addEventListener("click", function () {
      fullImage.style.display = "none";
    });
  }

  return (
    <nav className="navbar">
      <img src={me} alt="logo" className="logo" onClick={expandImage} />
      <div class="full-image-container">
        <img src={fme} alt="full" class="full-image" />
      </div>
      <div className="menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="menuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="menuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="tools"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="menuListItem"
        >
          Tools
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="menuListItem"
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="menuListItem"
        >
          Resume
        </Link>
      </div>
      <button
        className="menuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="" className="menuImg" /> Contact Me
      </button>

      <img
        src={menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
