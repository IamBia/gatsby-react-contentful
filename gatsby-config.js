require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Bianca Schuurman, fullstack developer`,
    description: `I am sharing my experience as a Fullstack and developer, content creator, mother and woman in tech.`,
    author: `Bianca Schuurman`,
  },
  plugins: [
  
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
          // language JSON resource path
          path: `${__dirname}/src/intl`,
          // supported language
          languages: [`en`, `pt-BR`],
          // language file path
          defaultLanguage: `en`,
          // option to redirect to `/en` when connecting `/`
          redirect: true,
      },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Poppins`,
          variants: [`400`, `600`, `700`, `800`, `900`]
        },
        {
          family: `Bebas+Neue`,
          subsets: [`latin`]
        },
      ],
    },
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: " GTM-P29D3XB",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },
  ],
}