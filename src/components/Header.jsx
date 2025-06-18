import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FaCode } from "react-icons/fa";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (open && !e.target.closest(".sidebar") && !e.target.closest(".menu-button")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [open]);

  return (
    <header className="  shadow-md fixed w-full top-0 z-50" id="header">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}

        <div className="text-xl font-bold">
  <a href="#home" className="hea flex items-center gap-2">
    <FaCode className="text-2xl" />
    <span>Aryan</span>
  </a>
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">          <FontAwesomeIcon icon={FaCode}/>

          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            <a
            href="/Aryan_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span>Resume</span>
          </a>
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl focus:outline-none">
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none menu-button">
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-2/3 h-full bg-white dark:bg-gray-800 shadow-lg transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden sidebar`} id="mobileDrower">
      <FontAwesomeIcon onClick={()=>setOpen(false)}icon={faTimes}
/>        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium">
          <a href="#home" className="hover:text-blue-500 transition" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue-500 transition" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" className="hover:text-blue-500 transition" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition" onClick={() => setOpen(false)}>Contact</a>
           <a
            href="/Aryan_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span>Resume</span>
          </a>
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl focus:outline-none">
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
