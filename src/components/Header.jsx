import React, { useState, useEffect } from 'react';
import '../App.css';
import 'boxicons/css/boxicons.min.css'; // Importing Boxicons CSS

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="header">
      <div className="header-logo">
        <a href="#home"><i className='bx bx-code-alt'></i> aryan</a>
      </div>
      <div className="header-buttons">
        <a href="#home" className="active-home" id="home-but">Home</a>
        <a href="#about" className="active-about">About</a>
        <a href="#projects" className="active-projects">Projects</a>
        <a href="#contact" className="active-contact">Contact</a>
        <i
          className={`bx ${theme === 'light' ? 'bx-moon' : 'bxs-sun'}`}
          onClick={toggleTheme} id='moonIcon'
        ></i>
      </div>
    </header>
  );
};

export default Header;
