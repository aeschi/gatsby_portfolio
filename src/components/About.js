import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AboutComponent = styled.section`
  background-color: var(--background-green);
  color: #ffffff;
`;

const About = () => {
  return (
    <AboutComponent>
      <h1>ABOUT</h1>
      <p>
        I'm a creative technologist with a background in photography, filmmaking
        and post production. I study Creative Technologies at Film University
        Babelsberg near Berlin, Germany. Prior to that, I graduated with a
        Bachelor of Engineering in Audiovisual Media at Stuttgart Media
        University, with a semester abroad at the Northern Film School in Leeds.
        Besides studying, I regularly work as a freelance set manager for ZDF
        Sport.
      </p>
      <p>
        am interested in various facets of creative technologies, including
        creative coding, mixed reality, volumetric video, tool development,
        interactive installations, and physical computing. Aside from that, I
        work and experiment with analog and digital photography. Generally, I'm
        passionate about technology, design, and our environment.
      </p>
      {/* <Img fluid={data.fileName.childImageSharp.fluid} alt="" /> */}
      <StaticImage src="../images/me.png" alt="A dinosaur" />
      <h2>SPEAKING/TEACHING</h2>
      <p>
        Podcast audioart - Kunst auf die Ohren: 48 Stunden Neukölln
        <span>@ 48 Stunden Neukölln, Berlin, 2021</span>
      </p>
      <p>
        Podcast Dritte Klappe — Creative Technologies: Die Kunst technologisch
        (zu) denken
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
        48 Stunden Neukölln — REMNANTS: Kind acts of Cruelty
        <span>@ KINDL, Berlin, 2021</span>
      </p>
      <p>
        Sehsüchte Festival — REMNANTS: Kind acts of Cruelty
        <span>@ Potsdam, 2021</span>
      </p>
      <p>
        Schweinfurter Kurzfilmtage 1st place audience award — Free from Skips
        <span>@ Schweinfurt, 2021</span>
      </p>
      <p>
        Carrousel international du film de Rimouski — Free from Skips
        <span>@ Québec, 2018</span>
      </p>
      <p>
        FReDD festival selection 2018 "Section Panorama" — Free from Skips
        <span>@ Toulouse, 2018</span>
      </p>
      <p>
        Selección Oficial Experimental Shortfilm, Allucinema Fest — Timor
        <span>@ Cancùn, 2016</span>
      </p>
    </AboutComponent>
  );
};

export default About;
