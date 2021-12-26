module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby_portfolio",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ],
};


// odule.exports = {
//   siteMetadata: {
//     siteUrl: "https://www.yourdomain.tld",
//     title: "gatsby_portfolio",
//   },
//   plugins: [
//     "gatsby-plugin-netlify-cms",
//     "gatsby-plugin-styled-components",
//     "gatsby-plugin-image",
//     "gatsby-plugin-react-helmet",
//     "gatsby-plugin-sitemap",
//     "gatsby-plugin-sharp",
//     "gatsby-transformer-sharp",
//     {
//       resolve: "gatsby-source-filesystem",
//       options: {
//         name: "images",
//         path: "./src/images/",
//       },
//       __key: "images",
//     },
//   ],
// };