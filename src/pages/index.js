import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/globals/Navbar"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/Home/Info"
import Slider from "../components/Home/Slider"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Navbar inverse={false} />
      <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="l'amérique du sud"
        styleClass="default-background"
      />
      <Info />
      <Slider />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg-home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "slider-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "slider-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "slider-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage