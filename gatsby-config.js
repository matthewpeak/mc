module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "McMillion",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/ // See below to configure properly
      }
    }
  },],
};
