import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading, imagesource }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum consequatur qui, magnam, necessitatibus dignissimos
              assumenda veniam explicabo iste consectetur magni earum, nesciunt
              repellendus est sint dolorem illum! Impedit fugiat fuga minima
              nostrum dicta officiis, labore facere, ipsum ut quam rerum quia ad
              inventore laborum. Aspernatur perspiciatis hic rem eaque! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
              unde, quod maiores nam ea quis excepturi at veritatis, architecto,
              fugit autem eum. Cum sapiente dolorem expedita atque pariatur
              officiis sed fugiat placeat iure incidunt? Magnam eius
              consequuntur est architecto eaque? Aut quia illo consequatur
              tenetur voluptatum ad excepturi incidunt sed, quisquam, odio
              autem, saepe repellendus provident quidem! Iure, quo eum?
              Architecto eos eum quaerat culpa totam quod quis quos eius amet
              cupiditate deleniti ullam quo cumque, fugiat adipisci maxime!
              Suscipit sapiente atque minima dolor. Vel dolorum sint at quos
              commodi autem maxime consectetur ut, repellendus reiciendis animi
              laudantium expedita suscipit.
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src={imagesource}
                className="card-img-top"
                alt="Image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Optio, unde dolorem inventore ea aut numquam dicta
                  reprehenderit culpa. Laboriosam, quaerat blanditiis deserunt
                  atque optio sit doloremque quibusdam dicta id ducimus!
                </p>
                <a href="#" className="btn btn-warning btn-block">
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
