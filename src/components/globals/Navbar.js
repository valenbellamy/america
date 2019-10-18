import React, { useState } from "react"
import { Link } from "gatsby"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarClass, setNavbarClass] = useState("collapse navbar-collapse")
  const links = [
    {
      id: 1,
      path: "/argentine",
      text: "Argentine",
    },
    {
      id: 2,
      path: "/chili",
      text: "Chili",
    },
  ]

  const navbarHandler = () => {
    if (navbarOpen) {
      setNavbarOpen(false)
      setNavbarClass("collapse navbar-collapse")
    } else {
      setNavbarOpen(true)
      setNavbarClass("collapse navbar-collapse show")
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Amerique du Sud
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={navbarHandler}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={navbarClass} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {links.map(link => (
                <li className="nav-item" key={link.id}>
                  <Link className="nav-link" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link className="ml-4 btn btn-primary" to="/carte">
                  Voir la carte
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
