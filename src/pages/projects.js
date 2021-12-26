import React from "react";
import BlogRoll from "../components/BlogRoll";
import GlobalStyles from "../components/globalStyles";
import styled from "styled-components";
import { respondTo } from "../components/_respondTo";

import "normalize.css";

const ProjectsComponentStyle = styled.section`
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    color: var(--red);
    font-size: 4.8rem;
    margin: 2rem 0;
  }
  p {
    font-size: 1.8rem;
  }
`;

class ProjectsIndexPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ProjectsComponentStyle>
          <h1>PROJECTS</h1>
          <section>
            <div className="content">
              <BlogRoll />
            </div>
          </section>
        </ProjectsComponentStyle>
      </>
    );
  }
}

export default ProjectsIndexPage;
