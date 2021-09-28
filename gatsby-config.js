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
  },  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://intense-beach-34041.herokuapp.com`,
      queryLimit: 5000, // Defaults to 100
      singleTypes: [`contact-us`,`welcome`,`what-we-do`,`footer`,`about-us-page`,`employees`,`cases`]
    },
  },],
};
