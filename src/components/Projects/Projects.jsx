import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import "./Projects.css";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5" className="projectTitle">
            {projectTitle}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({projects}) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects?.map((project, index) => (
          <ProjectCard
            url={project?.url}
            projectImage={project?.image?.url}
            projectTitle={project?.title}
            description={project?.description}
            technologies={project?.techStack}
            key={index}
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font:"100 1.2rem 'Ubuntu Mono" }} >
        All the Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
