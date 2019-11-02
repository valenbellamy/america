import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = props => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarClass, setNavbarClass] = useState("collapse navbar-collapse")
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [headerClass, setHeaderClass] = useState(props.inverse ? "inverse" : "")

  const listener = e => {
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollPos > currentScrollPos
    setPrevScrollPos(currentScrollPos)
    if (currentScrollPos < 50) {
      setHeaderClass("")
      if (props.inverse) {
        setHeaderClass("inverse")
      }
    } else if (visible) {
      setHeaderClass("visible")
    } else {
      setHeaderClass("hidden")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  const links = [
    {
      id: 1,
      path: "/blog/pays/argentine",
      text: "Argentine",
    },
    {
      id: 2,
      path: "/blog/pays/chili",
      text: "Chili",
    },
    {
      id: 3,
      path: "/blog/pays/bolivie",
      text: "Bolivie",
    },
    {
      id: 4,
      path: "/blog/pays/perou",
      text: "Pérou",
    },
    {
      id: 5,
      path: "/blog/pays/equateur",
      text: "Equateur",
    },
    {
      id: 6,
      path: "/blog/pays/colombie",
      text: "Colombie",
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
    <header className={headerClass}>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link className="navbar-brand italic" to="/">
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
        </nav>
      </div>
    </header>
  )
}

export default Navbar
