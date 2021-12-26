import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyles from "../components/globalStyles";
import Footer from "../components/Footer";
// import { respondTo } from "../components/_respondTo";

const PostComponent = styled.section`
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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <GlobalStyles />
      <PostComponent>
        <h1>{frontmatter.title}</h1>
        {/* <h2>{frontmatter.date}</h2> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostComponent>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
