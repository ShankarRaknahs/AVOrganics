import React from "react"

export default function Teamphotosection() {
  return (
    <div className="row mt-4">
      <div className="col-10 col-sm-10 mx-auto">
        <div className="card-group">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/242178/pexels-photo-242178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Cultivated on our Own</h5>
              <p className="card-text">
                We not just create medicines, we are also growing medicines. No
                doubt for any pesticides.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/4207910/pexels-photo-4207910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Near to Heart</h5>
              <p className="card-text">
                We are just someone from your own Native, nothing new and
                nothing unknown
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">We Know What We Do</h5>
              <p className="card-text">
                We have learnt and practiced many times before manking any
                medicine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
