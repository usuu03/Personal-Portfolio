import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <ProjectItem name={project.name} image={project.image} id={idx} />
          );
        })}
      </div>
    </div>
  );
}
