import * as React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import GlobalStyles from "../components/globalStyles";
import "normalize.css";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Projects />
      <About /> 
      <Footer /> 
    </>
  );
};

export default IndexPage;
