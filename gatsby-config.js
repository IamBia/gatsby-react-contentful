require('dotenv').config({
  path: `.env.development`,
});

module.exports = {
  siteMetadata: {
    title: `Bia.dev Blog`,
    description: `Sharing my experience as a developer`,
    author: `@bia.dev`,
  },
  plugins: [
  
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
  ],
}