import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Country = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDestination(
        filter: { pays: { title: { eq: "Argentine" } } }
      ) {
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
      contentfulPays(title: { eq: "Argentine" }) {
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
  `)
  console.log(data)
  return (
    <Layout>
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
            {data.allContentfulDestination.edges.map(edge => (
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
                        <Link to="/" className="btn btn-secondary">
                          voir les photos
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Country
