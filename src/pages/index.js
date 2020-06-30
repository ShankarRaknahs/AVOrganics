import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses} />
    <Dualinfoblock
      heading="Our Team"
      imagesource="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
