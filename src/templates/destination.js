import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/globals/Navbar"

export const query = graphql`
  query($slug: String!) {
    contentfulDestination(slug: { eq: $slug }) {
      title
      description {
        description
      }
      photos {
        id
        title
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Destination = ({ data }) => {
  const node = data.contentfulDestination
  console.log(node)
  return (
    <Layout>
      <Navbar inverse={true} />
      <SEO title="Destination" />
      <section className="gallery-section bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h1 className="text-center text-black mbm">{node.title}</h1>
              <p className="fs-l text-center text-gray italic mbl">
                {node.description.description}
              </p>
            </div>
          </div>
          <div className="gallery">
            {node.photos.map(image => (
              <div className="gallery-item" key={image.id}>
                <Img
                  alt={image.title}
                  fluid={image.fluid}
                  backgroundColor={`#040e18`}
                />
                <div>
                  <span className="text-black italic">
                    {image.description.charAt(0).toUpperCase() +
                      image.description.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Destination
