import React, { useEffect } from 'react';
import '../App.css';
import 'boxicons/css/boxicons.min.css'; // Importing Boxicons CSS

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      const active_home = document.querySelector(".active-home");
      const active_about = document.querySelector(".active-about");
      const active_projects = document.querySelector(".active-projects");
      const active_contact = document.querySelector(".active-contact");

      // active-home
      if (window.scrollY > 700) {
        active_home.style.color = "#323232";
      } else if (window.scrollY < 700) {
        active_home.style.color = "#0088ff";
      }
      // active-about
      if (window.scrollY < 700 || window.scrollY > 1400) {
        active_about.style.color = "#262626";
      } else if (window.scrollY > 700 && window.scrollY < 1500) {
        active_about.style.color = "#0088ff";
      }
      // active-projects
      if (window.scrollY < 1400 || window.scrollY > 2200) {
        active_projects.style.color = "#262626";
      } else if (window.scrollY > 1400 && window.scrollY < 2200) {
        active_projects.style.color = "#0088ff";
      }
      // active-contact
      if (window.scrollY < 2200) {
        active_contact.style.color = "#262626";
      } else if (window.scrollY > 2200) {
        active_contact.style.color = "#0088ff";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      </div>
    </header>
  );
};

export default Header;
