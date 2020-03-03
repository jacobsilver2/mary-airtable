require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mary Choueiter`,
    description: ``,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        partialMatching: false,
        pagePaths: [
          "/moody-gardens-aquarium/",
          "/melab-gallery-in-the-phillip-and-patricia-frost-museum/",
          "/canadian-museum-for-human-rights/",
        ],
        password: process.env.GATSBY_THEME_PASSWORD_PROTECT_PASSWORD,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `WorkHome`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `beirut-exhibition-center`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `moody-gardens-aquarium`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `melab-gallery-in-the-phillip-and-patricia-frost-museum`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `canadian-museum-for-human-rights`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `villa-sehnaoui-interior-design-elements`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `ocean-gazing-podcast-website`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `mathaf-museum-of-modern-arab-art`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `lef-corporate-identity`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `klimop-benefietavond`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `yuki-press-poster-pamphlet`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `enlarged-to-show-detail`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appYkA3RznpP4TcUq`,
            tableName: `contes-féeriques`,
            mapping: { Attachments: `fileNode` },
          },

          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `SideNotesHome`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `world-population-day-social-media-post`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `stories-under-the-stars`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `bubbles-a-little-thank-you`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `holiday-cards-2013-2015`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `ghinwa-and-ari-wedding-invite`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `wind-writings`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `writing-meander`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `city-debates-publication`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `appGvNaH7D0N8pqLR`,
            tableName: `ya-razeel-bus`,
            mapping: { Attachments: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mary Choueiter`,
        short_name: `Mary Choueiter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favIcon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
