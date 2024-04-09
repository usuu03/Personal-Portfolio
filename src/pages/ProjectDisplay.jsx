import { GitHub } from "@mui/icons-material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="Image" />
      <p>Skills: {project.skills}</p>
      <div className="icons-section">
        <Link to={project.url}>
          <GitHub />
        </Link>
        {project.demo && ( // Checking if demo exists
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <PlayCircleIcon />
          </a>
        )}
      </div>
    </div>
  );
}
