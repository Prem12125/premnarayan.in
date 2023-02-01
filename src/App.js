import Navbar from './components/Navbar';
import Head from './components/Head';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project' ;
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar About="About" Experience="Experience" Education="Education" Projects="Projects" Skills="Skills" Contact="Contacts"  />
    <Head/>
    <About/>
    <Experience/>
    <Education/>
    <Project  name=" Cricket Fantasy Game(Python)" name1="Microstrip Patch Antenna (ANSSY HFSS-15.0.1) " />
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
