import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"
import Navbar from "../components/globals/Navbar"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!, $title: String!) {
    allContentfulDestination(filter: { pays: { title: { eq: $title } } }) {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          cover {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    contentfulPays(slug: { eq: $slug }) {
      title
      drapeau {
        fixed(width: 25) {
          ...GatsbyContentfulFixed
        }
      }
      coverHorizontale {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Country = ({ data }) => {
  return (
    <Layout>
      <Navbar inverse={false} />
      <SEO title="Pays" />
      <BackgroundSection
        img={data.contentfulPays.coverHorizontale.fluid}
        title={data.contentfulPays.title}
        styleClass="medium-background"
        children={
          <Img
            className={"bg-flag"}
            fixed={data.contentfulPays.drapeau.fixed}
            backgroundColor={`#040e18`}
          />
        }
      />
      <section className="bg-grey pyl">
        <div className="container">
          <div className="row">
            {data.allContentfulDestination.edges.length !== 0 ? (
              data.allContentfulDestination.edges.map(edge => (
                <div className="col-10 mx-auto" key={edge.node.id}>
                  <div className="card card--country mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <Img
                          fluid={edge.node.cover.fluid}
                          backgroundColor={`#040e18`}
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body card-body--special bg-white">
                          <h3 className="text-black mbs">{edge.node.title}</h3>
                          <p className="text-gray mbm">
                            {edge.node.description.description}
                          </p>
                          <Link
                            to={`/blog/${edge.node.slug}`}
                            className="btn btn-secondary"
                          >
                            voir les photos
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-10 mx-auto">
                <h3 className="text-center">Aucune destination à ce jour</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Country