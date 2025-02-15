import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Dualinfoblock
      heading="Our Services"
      imagesource="https://images.pexels.com/photos/701727/pexels-photo-701727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ServicePage
