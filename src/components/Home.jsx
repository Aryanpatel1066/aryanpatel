import React from 'react';
import '../App.css';
// import memoji from '../assets/imgs/memoji1.png';
import hello from "../assets/imgs/hello.jpeg"
 const Home = () => {
  return (
    <section className="home"  id="home">
      <div className="img-home">
        <img src={hello} alt="Memoji" />
      </div>
      <div className="fw">
        <h1>Aryan Patel</h1>
        <h2>Full Stack (MERN) Developer</h2>
        <p>A passionate developer, based in <strong>Gandhinagar, Gujarat. 📍</strong></p>
        <div className="fw-buttons">
          <a href="https://www.linkedin.com/in/aryanpatel1066/" target="_blank" rel="noreferrer">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Aryanpatel1066" target="_blank" rel="noreferrer">
            <i className='bx bxl-github'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
