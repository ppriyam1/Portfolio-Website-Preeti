import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechSkills from "./components/TechSkills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


function App() {

  return (
    <>
    <Particles
    className = {"particles-canvas"}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width:2,
              color: "#822659"
            }
          },
          size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 8,
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              }
            }
        }
      }

      }
    />
    <NavBar />
    <Header />
    <AboutMe />
    <TechSkills />
    <Experience />
    <Projects />
    <ContactMe />
    <Footer />
    </>
  );
}

export default App;
