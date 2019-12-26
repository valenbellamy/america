import React, { Fragment, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import homeStyles from "./home.module.scss"
import useOnScreen from "../Hooks/useOnScreen"
import anime from "animejs/lib/anime.es.js"

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "img-right.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [setRef, visible] = useOnScreen({ threshold: 0 })
  const [alreadyVisible, setAlreadyVisible] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 576) {
      if (visible && !alreadyVisible) {
        animRef()
      }
    }
  }, [visible])

  const animRef = () => {
    setAlreadyVisible(true)
    anime
      .timeline()
      .add({
        targets: ".anime-title-1 .anime-word",
        translateY: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 200 + 100 * i,
      })
      .add(
        {
          targets: ".anime-p",
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 100 * i,
        },
        400
      )
  }

  return (
    <Fragment>
      <section className="pyxl">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={homeStyles.contentPx} ref={setRef}>
                <h2 className="text-black mbm anime-title-1">
                  <span className="anime-word">à</span>
                  <span className="anime-word">propos</span>
                </h2>
                <p className="text-gray anime-p mb-2">
                  Bienvenue sur Cactus et Lama, notre journal photos de voyage
                  sur l'Amérique du Sud réalisé en 2020. Le but de ce site est
                  de partager nos photos et notre itinéraire via une plateforme
                  faite maison !
                </p>
                <p className="text-gray anime-p mb-5">
                  Nous sommes deux passionnés de voyages, amateurs en
                  photographie ! Les photos sont prises avec un smartphone et
                  une GoPro.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={homeStyles.imgContainer}>
                <Img
                  className={homeStyles.specialGallery}
                  placeholderClassName={homeStyles.bgGallery}
                  fluid={data.imageOne.childImageSharp.fluid}
                  backgroundColor={`#ADB5C7`}
                  style={{ display: "block" }}
                  alt="Photo du Machu Picchu"
                />
                <div className={homeStyles.imgGradient}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Info
