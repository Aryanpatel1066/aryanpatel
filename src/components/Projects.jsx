import React from 'react';
import '../App.css';
import projectImgs from '../data/projectImages';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-text">
        <h1>Projects</h1>
        <h2>Each project is planned and is part of my coding history 💻</h2>
      </div>
      <div className="projects-content">
        
        {projectImgs.map((project, index) => (
          <div>
          <a href={project.link} target="_blank" rel="noreferrer" key={index}>
            <img className="projectImg"src={project.img} alt={project.alt} />
            
          </a>
        
          </div>
        ))}
      </div>
      <div className="projects-button">
        <a href="https://github.com/Aryanpatel1066?tab=repositories" target="_blank" rel="noreferrer">See more</a>
      </div>
    </section>
  );
};

export default Projects;
