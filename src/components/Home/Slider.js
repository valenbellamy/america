import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import sliderStyles from "./slider.module.scss"

const Slider = () => {
  const [indexSlide, setIndexSlide] = useState(0)
  const wrapperTransform = {
    transform: `translateX(-${indexSlide * 26}vw)`,
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulPays(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            title
            slug
            coverVerticale {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="slider pyl bg-grey">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2 className="text-black mbl">nos destinations</h2>
          <div className={sliderStyles.navSlider}>
            <button
              id="Suivant"
              type="button"
              disabled={indexSlide === 3 ? true : false}
              onClick={() => {
                setIndexSlide(indexSlide + 1)
              }}
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3284 7.03828V8.99785H5.19448L11.6725 14.3867L10 15.778L0.671631 8.01807L10 0.258179L11.6725 1.64947L5.19448 7.03828H19.3284Z"
                  fill="#FEFEFE"
                />
              </svg>
            </button>
            <button
              id="Précédent"
              type="button"
              disabled={indexSlide === 0 ? true : false}
              onClick={() => {
                setIndexSlide(indexSlide - 1)
              }}
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-4.62073e-08 6.7801V8.73967H14.1339L7.65586 14.1285L9.32837 15.5198L18.6567 7.75989L9.32837 0L7.65586 1.39129L14.1339 6.7801H-4.62073e-08Z"
                  fill="#FEFEFE"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${sliderStyles.slider} slider-index-${indexSlide}`}
          style={wrapperTransform}
        >
          {data.allContentfulPays.edges.map((edge, index) => (
            <Link
              to={`/blog/pays/${edge.node.slug}`}
              className={`${sliderStyles.slide} slide-${index}`}
              key={edge.node.id}
            >
              <Img
                className={sliderStyles.slideImg}
                fluid={edge.node.coverVerticale.fluid}
                backgroundColor={`#040e18`}
                imgStyle={{ transition: "all 0.5s ease" }}
              />
              <div className="slide-bg-dark"></div>
              <h3 className={sliderStyles.slideTitle}>{edge.node.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
