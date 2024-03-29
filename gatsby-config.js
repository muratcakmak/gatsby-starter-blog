module.exports = {
  siteMetadata: {
    title: `OMC's Blog`,
    author: `Oguzhan Murat Cakmak`,
    description: `Full Stack Software Engineer in San Francisco. React, React-Native, GraphQL, Node, and Golang.`,
    siteUrl: `https://oguzhan.netlify.com/`,
    social: {
      twitter: `omc345`,
      instagram: `omc345`,
    },
  },
  plugins: [
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-T5EGH5RHQN", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["@weknow/gatsby-remark-twitter"]
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts-v2",
      options: {
        fonts: [
          {
            family: 'Newsreader',
            variants: ['400', '700'],
          },
          {
            family: 'Open Sans',
            variants: ['400', '700'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "www.omc345.com", // webmention.io username
        identity: {
          // you need to specify at least one of the identities
          // to be able to log in webmention.io
          github: "omc345",
          twitter: "omc345", // no @
        },
        mentions: true,
        pingbacks: false,
        forwardPingbacksAsWebmentions: "",
        domain: "www.omc345.com",
        fetchLimit: 10000, // number of webmentions to fetch
        token: process.env.WEBMENTIONS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `omc345`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    // Class prefix for <pre> tags containing syntax highlighting;
                    // defaults to 'language-' (eg <pre class="language-js">).
                    // If your site loads Prism into the browser at runtime,
                    // (eg for use with libraries like react-live),
                    // you may use this to prevent Prism from re-processing syntax.
                    // This is an uncommon use-case though;
                    // If you're unsure, it's best to use the default value.
                    classPrefix: "language-",
                    // This is used to allow setting a language for inline code
                    // (i.e. single backticks) by creating a separator.
                    // This separator is a string and will do no white-space
                    // stripping.
                    // A suggested value for English speakers is the non-ascii
                    // character '›'.
                    inlineCodeMarker: null,
                    // This lets you set up language aliases.  For example,
                    // setting this to '{ sh: "bash" }' will let you use
                    // the language "sh" which will highlight using the
                    // bash highlighter.
                    aliases: {},
                    // This toggles the display of line numbers globally alongside the code.
                    // To use it, add the following line in src/layouts/index.js
                    // right after importing the prism color scheme:
                    //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                    // Defaults to false.
                    // If you wish to only show line numbers on certain code blocks,
                    // leave false and use the {numberLines: true} syntax below
                    showLineNumbers: false,
                    // If setting this to true, the parser won't handle and highlight inline
                    // code used in markdown i.e. single backtick code like `this`.
                    noInlineHighlight: false,
                  },
                },
              ],
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-136125593-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oguzhan Cakmak (OMC)`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
