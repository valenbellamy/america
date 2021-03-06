/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        ogImageDefault: file(relativePath: { eq: "social-cover.png" }) {
          childImageSharp {
            fixed(height: 600, width: 600) {
              src
            }
          }
        }
      }
    `
  )

  const ogImage = ogImageDefault.childImageSharp.fixed.src
  const metaDescription = description || site.siteMetadata.description
  const socialTitle = site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: socialTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "og:image",
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: socialTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: ogImage,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
