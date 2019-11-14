import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/globals/Navbar"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/Home/Info"
import Slider from "../components/Home/Slider"
import Anim from "../components/Home/Anim"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Anim />
      <Navbar inverse={false} />
      <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="l'amérique du sud"
        styleClass="default-background"
        delay="800"
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
  }
`

export default IndexPage
