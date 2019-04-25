require('dotenv').config()
const path = require('path')
const title = `Omid Ahourai - Blog`
console.log('env',process.env.NODE_ENV)

const common = {
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
          src: path.join(__dirname, 'src'),
          components: path.join(__dirname, 'src/components'),
          containers: path.join(__dirname, 'src/containers'),
          common: path.join(__dirname, 'src/common'),
          styles: path.join(__dirname, 'src/styles'),
          icons: path.join(__dirname, 'src/icons'),
          pages: path.join(__dirname, 'src/pages'),
      },
    },
  ]
}

const config = process.env.NODE_ENV === 'development' ? {
  siteMetadata: {
    title: `DEV - ${title}`,
  },
  plugins: [
    ...common.plugins,
    `gatsby-plugin-styled-components`,
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
    ...common.plugins,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-styled-components`,
    //   options: {
    //       displayName: false,
    //   },
    // },
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
        anonymize: false,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}

module.exports = config