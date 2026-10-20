import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <About/> 
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;