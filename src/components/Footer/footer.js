import { useRef } from "react";
import "./footer.css";
import useScrollReveal from "../Scroll/useScrollReveal";

const Footer = () => {
  const revealRef = useRef(null);
  useScrollReveal(revealRef);

  return (
    <footer className="footer" ref={revealRef} data-reveal>
      Copyright &#169; 2026 Navadeesh Sivakumar. All right received.
    </footer>
  );
};

export default Footer;