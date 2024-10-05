import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Footer from './components/Footer'
import Github from './components/Github'
import Hamburger from './components/Hamburger'
import Head from './components/Head'
import Projects from './components/Project'
import TechStack from './components/TechStack'

function App() {
  return (
    <>
      <Hamburger />
      <div id="head">
        <Head />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="Github">
        <Github />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
