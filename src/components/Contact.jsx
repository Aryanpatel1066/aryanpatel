import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-paragraph">
        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <button className="contact-button" onClick={() => window.location.href = 'mailto:aryanpatel1248@gmail.com'}>Mail me</button>
      <div className="icon-container">
        <a href="https://github.com/Aryanpatel1066" className="icon-link" target='_blank'>
        <i class='bx bxl-github'></i>
         </a>
        <a href="https://www.linkedin.com/in/aryanpatel1066/" className="icon-link" target='_blank'>
        <i class='bx bxl-linkedin-square'></i>
        </a>
        <a href="https://instagram.com/aryanpatel1066" className="icon-link" target='_blank'>
        <i class='bx bxl-instagram'  ></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
