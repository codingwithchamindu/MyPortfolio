import Navebar from "./components/Navebar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navebar/>
      <Profile/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

