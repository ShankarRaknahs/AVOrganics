import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading, imagesource }) {
  return (
    <section className="py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              பொருட்களை +91- 9791607002 என்ற எண்ணுக்கு போன் செய்தோ அல்லது வாட்ஸ்
              ஆப் மூலமாக குறுஞ்செய்தி அனுப்பியோ ஆர்டர் செய்து ஆன்லைன் அல்லது
              வங்கி மூலமாக பணம் செலுத்தினால் Proffessional Courier மூலமாக
              பொருட்களை உங்கள் வீடுகளுக்கே அனுப்பி வைக்கப்படும்.
            </p>

            <p className="lead text-white mb-5">
              If you need our products please make a call or whatsapp message to
              +91- 9791607002, and you will pay the amount through bank, then we
              will send that products to your home via proffessional courier.
            </p>

            <h4>Service Area</h4>
            <p className="text-white mb-5">
              We deliver products all over india, but please do conform us
              through whatsapp if you are making order out of Tamilnadu.
            </p>

            <h4>Delivery Time</h4>
            <p className="text-white mb-5">
              1-2 business days in TamilNadu <br />
              2-5 business days outside TamilNadu <br />
              **orders placed before 5PM on business days will be packed on same
              day and orders placed on non-business days will be packed on next
              business day.
            </p>
            <h4>Payment Options</h4>
            <p className="text-white mb-5">
              No Cash On delivery option as we use third party delivery service
              like Proffessional couriers <br />
              Payment has to be made in advance for all orders to +91-9942218555
              through Google Pay/ Paypal/ Paytm/ Phonepe
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
                <h5 className="card-title text-success">
                  Whatsapp and Get it delivered
                </h5>
                <p className="card-text text-white">
                  Send an whatsapp message to +91- 9791607002 and we will take
                  care of rest
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
                  className="btn btn-warning btn-block"
                >
                  Click here to order in Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
