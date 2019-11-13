import React, { useRef, useEffect } from "react"
import BackgroundImage from "gatsby-background-image"
import anime from "animejs/lib/anime.es.js"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  let titleRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 576) {
      titleRef.innerHTML = titleRef.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )
      anime({
        targets: ".letter",
        translateY: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 200 + 30 * i,
      })
    }
  }, [])

  return (
    <BackgroundImage
      className={styleClass}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      <div className="bg-filter"></div>

      <div className="container">
        {children}
        <h1
          className="bg-title anime-title text-white text-center"
          ref={element => {
            titleRef = element
          }}
        >
          {title}
        </h1>
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection
