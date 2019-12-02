require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mary Choueiter`,
    description: ``,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [
          `/canadian-museum-for-human-rights/*`,
          `/melab-gallery-in-the-phillip-and-patricia-frost-museum/*`,
          `/moody-gardens-aquarium/*`,
        ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 10,
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
        ],
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
