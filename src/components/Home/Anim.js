import React, { useEffect, useRef } from "react"
import anime from "animejs/lib/anime.es.js"

const Anim = () => {
  let svgRef = useRef(null)
  let svg2Ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 576) {
      anime
        .timeline()
        .add({
          targets: svg2Ref,
          opacity: 0,
          translateY: -100,
          easing: "easeInQuart",
          duration: 600,
          loop: false,
        })
        .add(
          {
            targets: svgRef,
            d: [
              {
                value: "M 0 0 H 100 V 40 C 85 60 65 60 50 50 35 40 15 40 0 60",
              },
            ],
            easing: "easeInQuart",
            duration: 500,
            loop: false,
          },
          "-=400"
        )
        .add({
          targets: svgRef,
          d: [
            {
              value: "M 0 0 H 100 V 0 C 85 0 65 0 50 0 35 0 15 0 0 0",
            },
          ],
          easing: "easeOutQuart",
          duration: 500,
          loop: false,
        })
    } else {
      anime
        .timeline()
        .add({
          targets: svg2Ref,
          opacity: 0,
          translateY: -100,
          easing: "easeInQuart",
          duration: 900,
          loop: false,
        })
        .add(
          {
            targets: svgRef,
            d: [
              {
                value: "M 0 0 H 100 V 50 C 85 55 65 55 50 50 35 45 15 45 0 50",
              },
            ],
            easing: "easeInQuart",
            duration: 500,
            loop: false,
          },
          "-=500"
        )
        .add({
          targets: svgRef,
          d: [
            {
              value: "M 0 0 H 100 V 0 C 85 0 65 0 50 0 35 0 15 0 0 0",
            },
          ],
          easing: "easeOutQuart",
          duration: 500,
          loop: false,
        })
    }

    anime({
      targets: ".morph-wrapper",
      translateY: "-100%",
      duration: 10,
      delay: 1000,
    })
  }, [])
  return (
    <div className="morph-wrapper">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          ref={element => {
            svgRef = element
          }}
          fill="#16a085"
          d="M 0 0 H 100 V 100 C 85 100 65 100 50 100 35 100 15 100 0 100"
        ></path>
      </svg>
      <svg
        className="anime-logo"
        viewBox="0 0 44 44"
        ref={element => {
          svg2Ref = element
        }}
      >
        <path d="M24.5,26.38c-2.12-1.81-1.87-2.62-4.56-2.62s-4.37.63-3.69,4.38,2.69,2.06,2.5,4.94.5,3.5.94,4.19,1.75,2.69,2.25-.12a12,12,0,0,1,2.5-5.75C25.5,30,26.63,28.19,24.5,26.38Zm-7.37-6.56c.13-1.44,2.44-2.94,4-3.62s3-.94,2.81-2.12S23.31,12,20.88,12s-1.37,3.25-3.37,1.31.44-1.44,1.44-1.87,2-2.25.25-2.37-1.37.75-2.75.25-2,1.75-2.87,1.44a11.66,11.66,0,0,1-3.15-2.51,18,18,0,0,0-4.85,6.45,8.47,8.47,0,0,0,2.13,5.12s.94,2.19,6.56,4.88c0,0,1.06.06-.19-1.19S11.44,20.69,13,19.88s2-.75,2.38.75S17,21.25,17.13,19.81Zm16,6.41A1.2,1.2,0,0,0,33,28.16c.59.53,1.78,1.22,2.16,0S33.81,25.78,33.09,26.22ZM22,0A22,22,0,1,0,44,22,22,22,0,0,0,22,0Zm0,42A20,20,0,1,1,42,22,20,20,0,0,1,22,42ZM39.92,20.33c0-.17,0-.34-.06-.52,0-.38-.1-.76-.17-1.13,0-.19-.07-.38-.11-.57-.08-.37-.18-.73-.28-1.09,0-.16-.09-.33-.14-.49q-.23-.73-.52-1.42c-.08-.2-.18-.39-.27-.58s-.25-.55-.39-.82-.25-.47-.39-.7l-.37-.61c-.16-.25-.32-.5-.49-.74l-.29-.39a18.1,18.1,0,0,0-2.36-2.6l-.16-.15c-.31-.27-.63-.54-1-.79l-.05,0A18,18,0,0,0,28.2,5.12a7,7,0,0,1-1.63,2.19,1.27,1.27,0,0,0,.87,2.31s-.5.5,0,2.31,1.34,2.21,3.81,1.19c1.06-.44,1.87-.21,1.75.88-.25,2.31-2,2.21-.69,5.94.81,2.25,2.81,3.13,3.56,4.88.41,1,2,1.85,3.34,2.45.14-.47.26-1,.37-1.44,0-.18.07-.37.11-.56.07-.36.12-.73.17-1.1,0-.17,0-.35.06-.52,0-.54.08-1.09.08-1.64S40,20.88,39.92,20.33Z" />
      </svg>
    </div>
  )
}

export default Anim
