import React from 'react';
import '../App.css';
import me from '../assets/imgs/me.jpg';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-moldure">
        <div className="about-content">
          <h1>About Me</h1>
          <h2>An ambitious Front-End developer, who aspires to success 🎓</h2>
          <p>
            I am a skilled, creative, and analytical programmer with a nimble mind to solve problems and
            translate ideas into functional code. My collaboration and passion for programming, coupled with
            my ability to learn quickly, make me a valuable asset to any development team.
          </p>
          <h3>Skills:</h3>
          <div className="skills">
            {skills.map(skill => (
              <img  className="skillImg"key={skill.name} src={skill.icon} alt={skill.name} />
            ))}
          </div>
        </div>
        <div className="img-about">
          <img src={me} alt="About"  />
        </div>
      </div>
    </section>
  );
};

export default About;
