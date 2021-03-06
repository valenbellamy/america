import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = props => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarClass, setNavbarClass] = useState("navbar-collapse")
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
    // {
    //   id: 4,
    //   path: "/blog/pays/perou",
    //   text: "Pérou",
    // },
    // {
    //   id: 5,
    //   path: "/blog/pays/equateur",
    //   text: "Equateur",
    // },
    // {
    //   id: 6,
    //   path: "/blog/pays/colombie",
    //   text: "Colombie",
    // },
  ]

  const navbarHandler = () => {
    if (navbarOpen) {
      setNavbarOpen(false)
      setNavbarClass("navbar-collapse")
    } else {
      setNavbarOpen(true)
      setNavbarClass("navbar-collapse show")
    }
  }

  return (
    <header className={headerClass}>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link
            className="navbar-brand"
            to="/"
            aria-label="Retour à la page d'accueil"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
              <path d="M24.5,26.38c-2.12-1.81-1.87-2.62-4.56-2.62s-4.37.63-3.69,4.38,2.69,2.06,2.5,4.94.5,3.5.94,4.19,1.75,2.69,2.25-.12a12,12,0,0,1,2.5-5.75C25.5,30,26.63,28.19,24.5,26.38Zm-7.37-6.56c.13-1.44,2.44-2.94,4-3.62s3-.94,2.81-2.12S23.31,12,20.88,12s-1.37,3.25-3.37,1.31.44-1.44,1.44-1.87,2-2.25.25-2.37-1.37.75-2.75.25-2,1.75-2.87,1.44a11.66,11.66,0,0,1-3.15-2.51,18,18,0,0,0-4.85,6.45,8.47,8.47,0,0,0,2.13,5.12s.94,2.19,6.56,4.88c0,0,1.06.06-.19-1.19S11.44,20.69,13,19.88s2-.75,2.38.75S17,21.25,17.13,19.81Zm16,6.41A1.2,1.2,0,0,0,33,28.16c.59.53,1.78,1.22,2.16,0S33.81,25.78,33.09,26.22ZM22,0A22,22,0,1,0,44,22,22,22,0,0,0,22,0Zm0,42A20,20,0,1,1,42,22,20,20,0,0,1,22,42ZM39.92,20.33c0-.17,0-.34-.06-.52,0-.38-.1-.76-.17-1.13,0-.19-.07-.38-.11-.57-.08-.37-.18-.73-.28-1.09,0-.16-.09-.33-.14-.49q-.23-.73-.52-1.42c-.08-.2-.18-.39-.27-.58s-.25-.55-.39-.82-.25-.47-.39-.7l-.37-.61c-.16-.25-.32-.5-.49-.74l-.29-.39a18.1,18.1,0,0,0-2.36-2.6l-.16-.15c-.31-.27-.63-.54-1-.79l-.05,0A18,18,0,0,0,28.2,5.12a7,7,0,0,1-1.63,2.19,1.27,1.27,0,0,0,.87,2.31s-.5.5,0,2.31,1.34,2.21,3.81,1.19c1.06-.44,1.87-.21,1.75.88-.25,2.31-2,2.21-.69,5.94.81,2.25,2.81,3.13,3.56,4.88.41,1,2,1.85,3.34,2.45.14-.47.26-1,.37-1.44,0-.18.07-.37.11-.56.07-.36.12-.73.17-1.1,0-.17,0-.35.06-.52,0-.54.08-1.09.08-1.64S40,20.88,39.92,20.33Z" />
            </svg>
          </Link>
          <button
            id="toggle navbar"
            className="navbar-toggler"
            aria-label="toggle navbar"
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
                <Link className="btn btn-primary" to="/carte">
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
