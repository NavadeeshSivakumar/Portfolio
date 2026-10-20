import { useEffect, useState } from "react";
import "./intro.css";

const scriptLines = [
  { type: "blank", text: "" },
  { type: "cmd", text: "$ whoami" },
  { type: "out", text: "Navadeesh Sivakumar" },
  { type: "blank", text: "" },
  { type: "cmd", text: "$ role --current" },
  { type: "out", text: "Backend & AI Engineer" },
  { type: "blank", text: "" },
  { type: "cmd", text: "$ stack --primary" },
  { type: "out", text: "Python · Java · Spring Boot · LangChain · LangGraph" },
  { type: "blank", text: "" },
  { type: "cmd", text: "$ status" },
  { type: "out", text: "Open to backend & AI engineering roles" },
];

const TOTAL_CHARS = scriptLines.reduce((sum, l) => sum + l.text.length + 1, 0);

const Intro = () => {
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= TOTAL_CHARS) return;
    const timer = setInterval(() => {
      setTypedCount((c) => Math.min(c + 1, TOTAL_CHARS));
    }, 16);
    return () => clearInterval(timer);
  }, [typedCount]);

  let remaining = typedCount;
  const visibleLines = [];
  for (const line of scriptLines) {
    if (remaining <= 0) break;
    const visibleLen = Math.min(line.text.length, remaining);
    const isTypingThisLine = visibleLen < line.text.length;
    visibleLines.push({
      ...line,
      shown: line.text.slice(0, visibleLen),
      showCursor: isTypingThisLine,
    });
    remaining -= line.text.length + 1;
  }
  const finishedTyping = typedCount >= TOTAL_CHARS;

  return (
    <section id="intro">
      <div className="introInner">
        <div className="introContent">
          <span className="statusPill">
            <span className="statusDot" />
            ONLINE — open to opportunities
          </span>
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm
            <span className="introName"> Navadeesh</span> <br /> 
          </span>
          <p className="introPara">
            Thanks for stopping by! I enjoy turning ideas into reality, tackling interesting challenges, 
            and creating things that make a difference. Explore my portfolio, and hopefully, you'll find something 
            that sparks your interest!
          </p>
        </div>

        <div className="terminalCard">
          <div className="terminalHeader">
            <span className="terminalDot red" />
            <span className="terminalDot yellow" />
            <span className="terminalDot green" />
            <span className="terminalTitle">navadeesh@portfolio: ~</span>
          </div>
          <pre className="terminalBody">
            {visibleLines.map((line, i) => {
              if (line.type === "blank") return "\n";
              return (
                <span
                  key={i}
                  className={line.type === "cmd" ? "termCmd" : "termOut"}
                >
                  {line.shown}
                  {line.showCursor && <span className="cursor" />}
                  {"\n"}
                </span>
              );
            })}
            {finishedTyping && <span className="cursor" />}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Intro;