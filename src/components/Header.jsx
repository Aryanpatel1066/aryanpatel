import React, { useState, useEffect } from 'react';
import '../App.css';
import 'boxicons/css/boxicons.min.css'; // Importing Boxicons CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [open,setOpen]=useState(false);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const openSlider = ()=>{
    setOpen(!open);
    console.log(open)
  }
   
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
        <FontAwesomeIcon onClick={openSlider} className='hambargur' icon={faBars} />
        {/* if user click habar then only show this slidbar */}
         {open && <div className="slidBar">
          <div className="headerButtons">
        <a href="#home" className="active-home" id="home-but">Home</a>
        <a href="#about" className="active-about">About</a>
        <a href="#projects" className="active-projects">Projects</a>
        <a href="#contact" className="active-contact">Contact</a>
        <i
          className={`bx ${theme === 'light' ? 'bx-moon' : 'bxs-sun'}`}
          onClick={toggleTheme} id='moonIcon'
        ></i>
        </div>
          </div>}
    </header>
  );
};

export default Header;
