import React from "react"
import BackgroundImage from "gatsby-background-image"
import backgroundStyles from "./background.module.scss"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage
      className={styleClass}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      <div className="bg-filter"></div>

      <div>
        {children}
        <h1 className="bg-title text-white">{title}</h1>
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
