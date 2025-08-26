import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';  

import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className='bg-gradient-to-br  from-gray-900 via-gray-800 to-black overflow-hidden'>
        <Navbar />
        <Hero/>
        <About />
        <Skills />
        <Projects/>
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
