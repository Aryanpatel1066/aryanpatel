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
        
        {projectImgs.map(({id,link,alt,img,languages,title,description,githublink}) => (
      <div className='projectCard'>
          <a href={link} target="_blank" rel="noreferrer" key={id}>
            <img id="projectImg"src={img} alt={alt} /></a>
            <div className='languagesDiv'>
                 {languages.map((language, langIndex) => (
                  <div className="lanBtn"key={langIndex}>{language}</div>
                    ))}
              </div>
              <h5 className='projectTitle'>{title}</h5>
              <div className="projectDescription">{description}</div>
              <div className="projectFooter">
                <a href={githublink} target='_blank' rel='noreferrer'>
              <i className='bx bxl-github'id='githubIcon'></i>
              </a>
              </div>
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
<a href="https://github.com/Aryanpatel1066" target="_blank" rel="noreferrer">
</a>