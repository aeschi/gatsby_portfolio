import React from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";

const HeroComponent = styled.section`
  color: var(--dark-blue);
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
    color: var(--dark-blue);
  }
  p {
    font-size: 2rem;
  }
`;

const Hero = () => {
  return (
    <HeroComponent>
      <Header>
        <h1>HI, I’M ANNA.</h1>
        <p>
          I’m a creative technologist based in Berlin. My projects vary from
          interactive installations to educative and artsy websites.
        </p>
      </Header>
      <Canvas />
    </HeroComponent>
  );
};

export default Hero;
