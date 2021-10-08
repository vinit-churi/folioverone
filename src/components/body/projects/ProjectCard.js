import React from "react";
import "./ProjectCard.css";
import { BiGlobe } from "react-icons/bi";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} className="project-link">
              <div className="link-button">
                <BiGlobe />
                <p>demo</p>
              </div>
            </a>
          )}
          {console.log(project.domo)}
          {project.demo && (
            <a href={project.demo} className="project-link">
              <div className="link-button">
                <i class="devicon-github-original colored"></i>
                <p>github</p>
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div>
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="project-pic" />
    </div>
  );
};

export default ProjectCard;
