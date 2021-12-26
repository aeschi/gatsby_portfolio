import React from "react";
import styled from "styled-components";

const FooterComponent = styled.section`
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  h2 {
    color: var(--dark-blue);
    font-size: 3.6rem;
    margin: 2rem 0;
    line-break: anywhere;
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
      <h2>GET IN TOUCH</h2>
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
