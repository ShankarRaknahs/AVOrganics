import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/avlogo.png"
//import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      { id: 2, text: "About", url: "/about" },
      {
        id: 3,
        text: "Services",
        url: "/services",
      },
      {
        id: 4,
        text: "Contact",
        url: "/contact",
      },
    ],
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm text-white">
        <Link to="/" className="navbar-brand ml-3">
          <img src={logo} alt="logo goes here" width="150px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span className="text-dark">menu</span>
        </button>

        <h2 className="text-uppercase font-weight-bold text-dark">
          {" "}
          Av Organics and Medicines
        </h2>

        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link
                    to={menu.url}
                    className="nav-link text-dark font-weight-bold"
                  >
                    {menu.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
