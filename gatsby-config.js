require('dotenv').config()
const path = require('path')
const title = `Omid Ahourai - Blog`

const config = process.env.NODE_ENV === 'development' ? {
  siteMetadata: {
    title: `DEV - ${title}`,
  },
  plugins: [
    // 'gatsby-plugin-resolve-src',
    {
        resolve: 'gatsby-plugin-root-import',
        options: {
            src: path.join(__dirname, 'src'),
            components: path.join(__dirname, 'src/components'),
            common: path.join(__dirname, 'src/common'),
            layouts: path.join(__dirname, 'src/layouts'),
            pages: path.join(__dirname, 'src/pages'),
            templates: path.join(__dirname, 'src/templates')
        },
    },
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            // displayName: false,
        },
    }
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || ``,
        accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || ``,
        host: 'preview.contentful.com',
      },
    },
    `gatsby-plugin-netlify`,
  ],
} : { // production
  siteMetadata: {
    title,
  },
  plugins: [
    // 'gatsby-plugin-resolve-src',
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
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '180777232501525',
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
    `gatsby-plugin-netlify`,
  ],
}

module.exports = config