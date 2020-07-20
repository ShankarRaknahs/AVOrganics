import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Infoblock from "../components/Reuseable/Infoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Infoblock heading="About us" />
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

export default AboutPage
