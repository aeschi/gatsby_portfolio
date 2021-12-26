import React from "react";
import styled from "styled-components";
import { respondTo } from "./_respondTo";
import LoadableP5 from "../components/LoadableP5";

const HeroComponent = styled.section`
  color: #ffffff;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const Header = styled.header`
  margin-top: -10vh;
  padding: 0rem 2rem;
  h1 {
    font-size: 4.8rem;
    color: var(--yellow);
    margin: 0;
  }
  p {
    margin-top: 1rem;
    font-size: 2rem;
  }

  .hl1 {
    color: var(--red);
  }
  .hl2 {
    color: var(--yellow);
  }
  .hl3 {
    color: var(--blue);
  }

  ${respondTo.md`
    h1 {
    font-size: 8rem;
    }
    p {
    font-size: 3.6rem;
    padding-right: 20vw;
    }
  `}
`;

const LoadableP5Style = styled.section`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
`;

const Hero = () => {
  return (
    <HeroComponent>
      <Header>
        <h1>HI, I’M ANNA.</h1>
        <p>
          I’m a creative technologist based in Berlin. My projects vary from
          <span className="hl1"> interactive</span> installations to
          <span className="hl2"> educative</span> and
          <span className="hl3"> artsy</span> websites.
        </p>
      </Header>
      <LoadableP5Style>
        <LoadableP5 />
      </LoadableP5Style>
    </HeroComponent>
  );
};

export default Hero;
