import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LCO"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock
      heading="A message from CEO"
      imagesource="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Infoblock heading="About Vision" />
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
