import React, { Component } from "react"
import Img from "gatsby-image"
//import { icons } from "react-icons/lib"
import ModalContent from "../Reuseable/ModalContent"
//import { Link } from 'gatsby-plugin-modal-routing'

const getCaty = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })

  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCaty(props.courses.edges),
    }
  }

  catyClicked = category => {
    let keepItsafe = [...this.state.courses]
    if (category === "all") {
      this.setState(() => {
        return { mycourses: keepItsafe }
      })
    } else {
      let holdme = keepItsafe.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { mycourses: holdme }
      })
    }
  }
  render() {
    return (
      <section className="py-1">
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-11 mx-9 my-1 text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-outline-info m-2 px-3"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-3 d-flex mb-5 mx-9">
                  <div className="flex-grow-1 mt-4 px-3">
                    <Img fixed={node.image.fixed} />
                    <div className="d-flex justify-content-between">
                      <h2 className="mb-0">{node.title}</h2>
                    </div>
                    <ModalContent
                      buttonLabel="Read more..."
                      title={node.title}
                      description={node.description.description}
                    />

                    <h4 className="mb-1 mt-1 text-success">Rs.{node.price}</h4>
                    <p>{"(" + node.priceunit + ")"}</p>

                    <br />

                    <a
                      href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
                      className="btn btn-warning"
                    >
                      Buy now through whatsapp
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
