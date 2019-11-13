import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl"
import Img from "gatsby-image"
import anime from "animejs/lib/anime.es.js"

const Maps = ({ data }) => {
  let itemsRef = useRef(null)
  const [viewport, setViewport] = useState({
    longitude: -56.097893,
    latitude: -15.601411,
    width: "70vw",
    height: "100vh",
    zoom: 2,
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    anime({
      targets: ".anime-media",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 400 + 100 * i,
    })
  }, [])

  useLayoutEffect(() => {
    function updateSize() {
      setViewport({
        longitude: -60.097893,
        latitude: -30.901411,
        width: "100vw",
        height: window.innerHeight - 200,
        zoom: 2,
      })
    }
    window.addEventListener("resize", updateSize)
    if (window.innerWidth < 992) {
      updateSize()
    }
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const centerMap = edge => {
    setSelectedCity(edge)
    setViewport({
      longitude: edge.node.localisation.lon,
      latitude: edge.node.localisation.lat,
      zoom: 5,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000,
    })
  }
  return (
    <Layout>
      <SEO title="Carte des destinations" />
      <div className="gallery-wrapper">
        <Link className="btn btn-secondary btn-fixed mbm" to="/">
          Retour
        </Link>
        <div className="flexbox-container">
          <div className="flexbox-item item-cities">
            <div
              className="cities"
              ref={element => {
                itemsRef = element
              }}
            >
              {data.allContentfulDestination.edges.map(edge => (
                <div
                  className="media anime-media"
                  key={edge.node.id}
                  onMouseOver={() => {
                    if (currentIndex !== edge.node.id) {
                      setCurrentIndex(edge.node.id)
                      centerMap(edge)
                    } else {
                      setSelectedCity(edge)
                    }
                  }}
                  onMouseLeave={() => {
                    setSelectedCity(null)
                  }}
                >
                  <Img fixed={edge.node.cover.fixed} />
                  <div className="media-body align-self-center">
                    <h4 className="text-black">{edge.node.title}</h4>
                    <p className="text-gray italic-crimson">
                      {edge.node.pays.title}
                    </p>
                    <Link
                      to={`/blog/${edge.node.slug}`}
                      className="btn btn-link btn-link-secondary"
                    >
                      voir les photos
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flexbox-item item-map">
            <div className="map">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/valentinbellamy/ck1iv6jbp1yos1cm8khc4ow7f"
                onViewportChange={viewport => {
                  setViewport(viewport)
                }}
              >
                {data.allContentfulDestination.edges.map(edge => (
                  <Marker
                    key={edge.node.id}
                    latitude={edge.node.localisation.lat}
                    longitude={edge.node.localisation.lon}
                  >
                    <button
                      className="btn--marker"
                      onClick={e => {
                        e.preventDefault()
                        setSelectedCity(edge)
                      }}
                    >
                      <Img fixed={data.img.childImageSharp.fixed} />
                    </button>
                  </Marker>
                ))}

                {selectedCity ? (
                  <Popup
                    latitude={selectedCity.node.localisation.lat}
                    longitude={selectedCity.node.localisation.lon}
                    onClose={() => {
                      setSelectedCity(null)
                    }}
                  >
                    <div>
                      <h4>{selectedCity.node.title}</h4>
                    </div>
                  </Popup>
                ) : null}
              </ReactMapGL>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "pin.png" }) {
      childImageSharp {
        fixed(width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allContentfulDestination {
      edges {
        node {
          id
          title
          slug
          localisation {
            lat
            lon
          }
          description {
            description
          }
          cover {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
          pays {
            title
          }
        }
      }
    }
  }
`

export default Maps
