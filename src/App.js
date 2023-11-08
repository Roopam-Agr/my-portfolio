import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import "./index.css"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
