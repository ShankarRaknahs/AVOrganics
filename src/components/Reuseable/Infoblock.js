import React from "react"
//import Heading from "./Heading"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-white text-center">
            <p className="lead text-white mb-1">
              We are selling Organic products and Herbal medicines. We are group
              of organic farmers from Nammazhwar’s Vanagam Centre
              <br />
              We make herbal medicines from the organic products from our chain
              of farmers in all over TamilNadu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
