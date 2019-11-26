import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-404">
      <h1 className="text-black mbs">OUPS ...</h1>
      <p className="text-gray mbs">Cette page n'existe pas</p>
      <Link className="btn btn-secondary" to="/">
        Retour à l'accueil
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
