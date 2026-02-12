import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import SplineScene from './components/UI/SplineScene';
import Aurora from './components/UI/Aurora';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import './styles/global.css';
import './App.css';
import Chatbot from './components/Sections/Chatbot';

function App() {
  return (
    <div className="App">
      <SplineScene />
      <Aurora />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
        

      
    </div>
  );
}

export default App;