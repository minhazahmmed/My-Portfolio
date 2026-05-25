
import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Certificate from './components/sections/Certificate';
import Education from './components/sections/Education';
import GetInTouch from './components/sections/GetInTouch';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {


  return (
     <main className="bg-gray-950 min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificate/>
      <GetInTouch/>
      <Footer />
    </main>
 
  
  );
}

export default App
