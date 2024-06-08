import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Education from './components/Education';
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <footer className="copyright">
        <h1>All rights reserved ©</h1>
      </footer>
    </div>
  );
};

export default App;
