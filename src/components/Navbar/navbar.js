import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import me from "./profile 2.JPG";
import fme from "./profile 2.JPG";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageOpen]);

  const closeMenu = () => setShowMenu(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
    closeMenu();
  };

  const handleProfileKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsImageOpen(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <img
          src={me}
          alt="Profile"
          className="logo"
          onClick={() => setIsImageOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={handleProfileKeyDown}
        />

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
            Stack
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

        <button className="menuBtn" onClick={scrollToContact}>
          Contact Me
        </button>

        <button
          type="button"
          className="mobMenu"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label={
            showMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showMenu}
          aria-controls="mobile-navigation"
        >
          {showMenu ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div
          id="mobile-navigation"
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="listItem"
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Stack
          </Link>

          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="listItem"
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </nav>

      {isImageOpen && (
        <div
          className="full-image-container"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            className="image-close"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close profile image"
          >
            &times;
          </button>

          <img
            src={fme}
            alt="Expanded profile"
            className="full-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;