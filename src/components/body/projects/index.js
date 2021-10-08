import React from "react";
import Seperator from "../../common/seperator/Seperator";
import { ProjectData } from "../../data/project";
import ProjectCard from "./ProjectCard";
import "./projects.css";
const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
