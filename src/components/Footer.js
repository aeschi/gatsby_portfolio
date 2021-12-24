import React from "react";
import styled from "styled-components";

const FooterComponent = styled.section`
  color: #000;
`;

const Footer = () => {
  return (
    <FooterComponent>
      <h1>Get in touch</h1>
      <p>
        Feel free to contact me via mail. <br />
        Check out LinkedIn for my CV. <br />I regularly post my photography and
        current work on instagram.
      </p>
      <h6>Imprint/Privacy</h6>
      <h6>© 2022, all rights reserved by Anna Eschenbacher</h6>
    </FooterComponent>
  );
};

export default Footer;
