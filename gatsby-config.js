require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Bianca Schuurman, fullstack developer`,
    description: `I am sharing my experience as a Fullstack and developer, content creator, mother and woman in tech.`,
    author: `Bianca Schuurman`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },

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
        name: `biadev.co`,
        short_name: `Bia Dev`,
        icon: `src/images/biadev-logo-black-small.jpeg`,
        start_url: `/`,
        background_color: `#1e1e1e`,
        theme_color: `#1e1e1e`,
        display: `minimal-ui`,
        favicon: "yes",
        lang: `en`,
        localize: [
          {
            start_url: `/pt-BR/`,
            lang: `pt-BR`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/`, `/projects/*`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ["whitelist"], // Don't remove this selector
        ignore: ["/ignored.css", "prismjs/", "docsearch.js/"], // Ignore files/folders
        purgeOnly: [
          "components/",
          "/global.css",
          "node_modules/bootstrap",
          "tailwindcss",
        ], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Poppins:400,600,700,800,900", "Bebas+Neue"],
      },
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: `${process.env.ID}`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trakingID: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
      },
    },
  ],
}
