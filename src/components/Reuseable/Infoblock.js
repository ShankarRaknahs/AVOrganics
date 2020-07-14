import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-white text-center">
            <p className="lead text-white mb-4">
              We are selling organic products and herbal medicines. We are group
              of organic farmers from nammazhwar’s vanagam centre. All farmers
              doing variety of products in all over tamilnadu. Mainly we made
              herbal medicines from this organic products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
