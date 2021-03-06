import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { respondTo } from "./_respondTo";

const AboutComponent = styled.section`
  background-color: var(--dark-blue);
  box-sizing: border-box;
  padding: 0 1.5rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    color: var(--red);
    font-size: 4.8rem;
    margin: 2rem 0;
  }
  h2 {
    color: var(--red);
    font-size: 3.6rem;
    margin: 2rem 0;
    line-break: anywhere;
  }
  p {
    font-size: 1.8rem;
    font-weight: normal;
    margin: 0 0 1rem 0;
  }

  ${respondTo.md`
    flex-direction: row;
    h1 {
    font-size: 8rem;
    }
    h2 {
    font-size: 4.5rem;
    }
    p {
    font-size: 3.6rem;
  }
  `}
`;

const AboutTitle = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AboutBio = styled.section`
  flex: 1.5;
  display: flex;
  flex-direction: column;

  ${respondTo.md`
    margin-left: 4rem;
    margin-top: 4rem;
  `}
`;

const AboutList = styled.section`
  /* background-color: #fff;
  color: var(--dark-blue); */
`;

const About = () => {
  return (
    <AboutComponent>
      <AboutTitle>
        <h1>ABOUT</h1>
      </AboutTitle>
      <AboutBio>
        <p>
          I'm a creative technologist with a background in photography,
          filmmaking and post production. I study Creative Technologies at Film
          University Babelsberg near Berlin, Germany.
        </p>
        <p>
          Prior to that, I graduated with a Bachelor of Engineering in
          Audiovisual Media at Stuttgart Media University, with a semester
          abroad at the Northern Film School in Leeds.
        </p>
        <p>
          I am interested in various facets of creative technologies, including
          creative coding, mixed reality, volumetric video, tool development,
          interactive installations, and physical computing.
        </p>
        <p>
          Aside from that, I work and experiment with analog and digital
          photography. Generally, I'm passionate about technology, design, and
          our environment.
        </p>
        {/* <Img fluid={data.fileName.childImageSharp.fluid} alt="" /> */}
        <StaticImage src="../images/me.png" alt="A dinosaur" />

        <AboutList>
          <h2>SPEAKING</h2>
          <p>
            Podcast audioart - Kunst auf die Ohren: 48 Stunden Neuk??lln
            <span>@ 48 Stunden Neuk??lln, Berlin, 2021</span>
          </p>
          <p>
            Podcast Dritte Klappe ??? Creative Technologies: Die Kunst
            technologisch (zu) denken
            <span> @ Filmuni, Potsdam, 2021</span>
          </p>
          <p>
            Three.js Workshop
            <span>@ Filmuni, Potsdam, 2021</span>
          </p>
          <p>
            FMX 2021 Artist Talk
            <span>@ FMX, Stuttgart/online, 2021</span>
          </p>
          <p>
            Coding Fun Instruments Workshop @Filmuni
            <span>@ Filmuni, Potsdam, 2021</span>
          </p>
          <h2>EXHIBITIONS</h2>
          <p>
            48 Stunden Neuk??lln ??? REMNANTS: Kind acts of Cruelty
            <span>@ KINDL, Berlin, 2021</span>
          </p>
          <p>
            Sehs??chte Festival ??? REMNANTS: Kind acts of Cruelty
            <span>@ Potsdam, 2021</span>
          </p>
          <p>
            Schweinfurter Kurzfilmtage 1st place audience award ??? Free from
            Skips
            <span>@ Schweinfurt, 2021</span>
          </p>
          <p>
            Carrousel international du film de Rimouski ??? Free from Skips
            <span>@ Qu??bec, 2018</span>
          </p>
          <p>
            FReDD festival selection 2018 "Section Panorama" ??? Free from Skips
            <span>@ Toulouse, 2018</span>
          </p>
          <p>
            Selecci??n Oficial Experimental Shortfilm, Allucinema Fest ??? Timor
            <span>@ Canc??n, 2016</span>
          </p>
        </AboutList>
      </AboutBio>
    </AboutComponent>
  );
};

export default About;
