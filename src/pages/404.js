import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Cette page n'existe pas</p>
    <Link className="btn btn-secondary mbm" to="/">
      Retour à l'accueil
    </Link>
  </Layout>
)

export default NotFoundPage
