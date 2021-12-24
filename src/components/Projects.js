import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ProjectsComponent = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectComponent = styled.section`
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const projects = [
  {
    title: "Walking Home",
    url: "./project1",
    img: "../images/project_thumb/project1.png",
    alt: "Walking Home image",
  },
  {
    title: "Trails",
    url: "./project2",
    img: "../images/project_thumb/project2.png",
    alt: "Trails image",
  },
  {
    title: "Klong Visualiser",
    url: "./project3",
    img: "../images/project_thumb/project3.png",
    alt: "Klong image",
  },
];

const Projects = () => {
  return (
    <>
      {" "}
      <h1>PROJECTS</h1>
      <ProjectsComponent>
        <div>
          {projects.map((project) => (
            <div className="project" key={project.title}>
              <ProjectComponent>
                <a href={project.url}>
                  <StaticImage
                    src="../images/project_thumb/project2.png"
                    alt={project.alt}
                  />
                </a>
              </ProjectComponent>
            </div>
          ))}
        </div>

        <div>
          <a href="./projects">
            <p>show more</p>
          </a>
        </div>
      </ProjectsComponent>
    </>
  );
};

export default Projects;
