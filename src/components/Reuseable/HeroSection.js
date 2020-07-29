import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ img, title, subtitle, heroclass }) {
  return <BackgroundImage className={heroclass} fluid={img} />
}
