
import './App.css'
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {


  return (
     <main className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />

  
      <About />
      <Skills />
      <Projects />
      <Education />
      {/* <Footer /> */}
    </main>
 
  
  );
}

export default App
