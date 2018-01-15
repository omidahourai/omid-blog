require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `StoryFork Blog`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || ``,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ``,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112467017-1",
        // Setting this parameter is optional
        anonymize: false,
      },
    },
  ],
}
