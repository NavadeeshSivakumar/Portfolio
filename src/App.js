import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Tool from "./components/Tools/tool";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <About/>
      <Tool/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
