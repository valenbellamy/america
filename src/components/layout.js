import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
