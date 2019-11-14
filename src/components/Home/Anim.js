import React, { useEffect, useRef } from "react"
import anime from "animejs/lib/anime.es.js"

const Anim = () => {
  let svgRef = useRef(null)

  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: svgRef,
        d: [
          {
            value: "M 0 0 H 100 V 30 C 85 70 65 70 50 50 35 30 15 30 0 70",
          },
        ],
        easing: "easeInQuart",
        duration: 800,
        loop: false,
      })
      .add({
        targets: svgRef,
        d: [
          {
            value: "M 0 0 H 100 V 0 C 85 0 65 0 50 0 35 0 15 0 0 0",
          },
        ],
        easing: "easeOutQuart",
        duration: 800,
        loop: false,
      })

    anime({
      targets: ".morph-wrapper",
      translateY: "-100%",
      duration: 10,
      delay: 1600,
    })
  }, [])
  return (
    <div className="morph-wrapper">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          ref={element => {
            svgRef = element
          }}
          fill="#070707"
          d="M 0 0 H 100 V 100 C 85 100 65 100 50 100 35 100 15 100 0 100"
        ></path>
      </svg>
    </div>
  )
}

export default Anim
