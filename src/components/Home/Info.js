import React, { Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import homeStyles from "./home.module.scss"
import Slider from "./Slider"

const Info = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "img-right.jpg" }) {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageOne = data.imageOne.childImageSharp.fixed
      return (
        <Fragment>
          <section className="pyl">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className={homeStyles.contentPx}>
                    <h2 className="text-black mb-5">à propos</h2>
                    <p className="text-gray mb-2">
                      Quisque ac lectus mauris. Duis aliquet tortor massa, ut
                      sollicitudin justo viverra sit amet. Suspendisse potenti.
                      Vestibulum laoreet quis augue at consectetur.
                    </p>
                    <p className="text-gray mb-5">
                      Curabitur nec eleifend lacus. In congue et elit id
                      commodo. Proin quis arcu congue, accumsan eros eu, aliquam
                      augue. Nullam porta eu turpis eu eleifend.
                    </p>
                  </div>
                </div>
                <div className={`col-md-6`}>
                  <div className={homeStyles.imgContainer}>
                    <Img
                      className={homeStyles.specialGallery}
                      placeholderClassName={homeStyles.bgGallery}
                      fixed={imageOne}
                      backgroundColor={`#ADB5C7`}
                      style={{ display: "block" }}
                    />
                    <div className={homeStyles.imgGradient}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )
    }}
  />
)

export default Info
