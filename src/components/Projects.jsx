import React from 'react';
import '../App.css';
import projectImgs from '../data/projectImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-text">
        <h1>Projects</h1>
        <h2>Each project reflects my growth and passion for coding. 💻</h2>
      </div>
      <div className="projects-content">

        {projectImgs.map(({ id, link, alt, img, languages, title, description, githublink }) => (
          <div className='projectCard'>
            <a href={link} target="_blank" rel="noreferrer" key={id}>
              <img id="projectImg" src={img} alt={alt} /></a>
            <div className='languagesDiv'>
              {languages.map((language, langIndex) => (
                <div className="lanBtn" key={langIndex}>{language}</div>
              ))}
            </div>
            <h5 className='projectTitle'>{title}</h5>
            <div className="projectDescription">{description}</div>
            <div className="projectFooter">
              <a href={githublink} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <a href="https://github.com/Aryanpatel1066?tab=repositories" target="_blank" rel="noreferrer">See More</a>
      </div>
    </section>
  );
};

export default Projects;
 