import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Contactinfo({ heading, imagesource }) {
  return (
    <section className="py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <h2>AV Organics and Medicines</h2>
            <p className="text-white mb-5">
              Head Office - Velacherry Chennai <br />
              Branches - Peruvarani Theni <br />
            </p>

            <h4>+91-9791607002</h4>
            <a
              href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
              className="btn btn-info btn-block"
            >
              Reach in Whatsapp
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
              className="btn btn-info btn-block"
            >
              Dial our Phone
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
              className="btn btn-info btn-block"
            >
              Reach in Telegram
            </a>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src={imagesource}
                className="card-img-top"
                alt="Image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-success">
                  Whatsapp for any queries
                </h5>
                <p className="card-text text-white">
                  Send an whatsapp message to +91-9791607002 and we will take
                  care of rest
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
                  className="btn btn-warning btn-block"
                >
                  Click here to contact us in Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
