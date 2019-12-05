import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/globals/Navbar"
import anime from "animejs/lib/anime.es.js"

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
  let titleRef = useRef(null)
  let textRef = useRef(null)
  let galleryRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 576) {
      titleRef.innerHTML = titleRef.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )

      anime
        .timeline()
        .add({
          targets: ".anime-title",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 0,
        })
        .add({
          targets: ".letter",
          translateY: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 200 + 30 * i,
        })
        .add(
          {
            targets: textRef,
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 100 * i,
          },
          400
        )
        .add(
          {
            targets: galleryRef,
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 100 * i,
          },
          600
        )
    }
  }, [])

  return (
    <Layout>
      <Navbar inverse={true} />
      <SEO title="Destination" />
      <section className="gallery-section bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h1
                className="text-center text-black anime-title mbm"
                ref={element => {
                  titleRef = element
                }}
              >
                {node.title}
              </h1>
              <p
                className="anime-p fs-l text-center text-gray italic mbl"
                ref={element => {
                  textRef = element
                }}
              >
                {node.description.description}
              </p>
            </div>
          </div>
          <div
            className="gallery anime-gallery"
            ref={element => {
              galleryRef = element
            }}
          >
            {node.photos.map(image => (
              <div
                className={`gallery-item ${
                  image.fluid.aspectRatio > 1 ? "two" : "three"
                }`}
                key={image.id}
              >
                <Img
                  alt={image.description}
                  fluid={image.fluid}
                  backgroundColor={`#040e18`}
                />
                <div className="text-center">
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
