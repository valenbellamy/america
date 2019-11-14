import React, { useEffect, useRef } from "react"
import anime from "animejs/lib/anime.es.js"

const Anim = () => {
  let svgRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 576) {
      anime
        .timeline()
        .add({
          targets: svgRef,
          d: [
            {
              value: "M 0 0 H 100 V 40 C 85 60 65 60 50 50 35 40 15 40 0 60",
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
    } else {
      anime
        .timeline()
        .add({
          targets: svgRef,
          d: [
            {
              value: "M 0 0 H 100 V 50 C 85 55 65 55 50 50 35 45 15 45 0 50",
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
    }

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
