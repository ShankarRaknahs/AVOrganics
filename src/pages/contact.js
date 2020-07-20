import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contactinfo from "../components/Reuseable/Contactinfo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Contactinfo
      heading="How can we Help?"
      imagesource="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

export default ContactPage
