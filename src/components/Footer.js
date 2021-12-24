import React from "react";
import styled from "styled-components";

const FooterComponent = styled.section`
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  h1 {
    font-size: 4.8rem;
    margin-top: 0;
  }
  h6 {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.8rem;
  }
  a {
    color: var(--red);
    font-weight: bold;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <h1>Get in touch</h1>
      <p>
        Feel free to contact me via
        <a href="mailto:annaeschenbacher@icloud.com"> mail</a>
        . <br />
        Check out
        <a href="https://www.linkedin.com/in/anna-eschenbacher/"> LinkedIn </a>
        for my CV. <br />I regularly post my photography and current work on
        <a href="https://www.instagram.com/anna_eschi/"> instagram</a>.
      </p>
      <h6>
        <a href="./imprint"> Imprint/Privacy</a>
        <br />© 2022, all rights reserved by Anna Eschenbacher
      </h6>
    </FooterComponent>
  );
};

export default Footer;
