import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { respondTo } from "./_respondTo";

const ProjectsComponent = styled.section`
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    color: var(--dark-blue);
    font-size: 4.8rem;
    margin: 0;
  }
  p {
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    color: var(--blue);
  }
  // from breakpoint md
  ${respondTo.md`
    flex-direction: row;
    h1 {
    font-size: 8rem;
    }
    p {
    font-size: 2.2rem;
  }
  `}
`;

const ProjectsText = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1.5;
  ${respondTo.md`
    margin-left: 4rem;
  `}
`;

const ProjectComponent = styled.section`
  width: 100%;
  margin-top: 1.5rem;
  border-radius: 0.25rem;
  overflow: hidden;
  ${respondTo.md`
    height: 30vh;
    border-radius: 0.45rem;
  `}
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
      <ProjectsComponent>
        <ProjectsText>
          <h1>PROJECTS</h1>
        </ProjectsText>
        <ProjectsContainer>
          <div>
            {projects.map((project) => (
              <div className="project" key={project.title}>
                <ProjectComponent>
                  <a href={project.url}>
                    <StaticImage
                      src="../images/project_thumb/project1.png"
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
        </ProjectsContainer>
      </ProjectsComponent>
    </>
  );
};

export default Projects;
