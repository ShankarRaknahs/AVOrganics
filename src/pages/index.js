import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Infoblock heading="Welcome" />
    <Coursecart courses={data.items} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bann4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    items: allContentfulItems {
      edges {
        node {
          id
          title
          price
          priceunit
          category
          description {
            description
          }
          image {
            fixed(width: 300, height: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
