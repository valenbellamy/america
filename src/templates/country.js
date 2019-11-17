import React, { useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"
import Navbar from "../components/globals/Navbar"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import anime from "animejs/lib/anime.es.js"

export const query = graphql`
  query($slug: String!, $title: String!) {
    allContentfulDestination(filter: { pays: { title: { eq: $title } } }) {
      edges {
        node {
          id
          title
          slug
          introduction
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
  let itemsRef = useRef(null)
  let flagRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 576) {
      anime({
        targets: ".anime-col",
        translateY: [80, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 0 + 30 * i,
      })
      anime({
        targets: ".anime-flag",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 800,
        delay: (el, i) => 400 + 30 * i,
      })
    }
  }, [])

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
            className={"bg-flag anime-flag"}
            fixed={data.contentfulPays.drapeau.fixed}
            backgroundColor={`#040e18`}
            ref={element => {
              flagRef = element
            }}
          />
        }
      />
      <section className="bg-grey pyl">
        <div className="container">
          <div
            className="row"
            ref={element => {
              itemsRef = element
            }}
          >
            {data.allContentfulDestination.edges.length !== 0 ? (
              data.allContentfulDestination.edges.map(edge => (
                <div
                  className="col-lg-10 col-md-6 col-xs-12 mx-auto anime-col"
                  key={edge.node.id}
                >
                  <div className="card card--country mb-4">
                    <div className="row no-gutters">
                      <div className="col-lg-6">
                        <Img
                          fluid={edge.node.cover.fluid}
                          backgroundColor={`#040e18`}
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="card-body card-body--special bg-white">
                          <h3 className="text-black mbs">{edge.node.title}</h3>
                          <p className="text-gray mbm">
                            {edge.node.introduction}
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
