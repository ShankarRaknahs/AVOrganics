import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-white text-center">
            <p className="lead text-white mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dicta aliquam accusamus dignissimos eligendi dolores
              ratione modi, mollitia repudiandae ut minima, accusantium sapiente
              eius libero maiores ipsam fuga fugiat molestiae voluptate debitis
              deleniti aspernatur ab! Doloribus neque sint dicta, facilis
              voluptate fuga suscipit omnis aliquid quasi eum dolores similique
              qui provident voluptatem nisi, rem eveniet ipsum amet quaerat eos
              laudantium!
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
