import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, Nav } from "reactstrap";
import { RxRows } from "react-icons/rx";

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="navbarArea">
        <div className="container borderTopNavbar"></div>
        <div className="container">
          <Navbar expand="sm">
            <button
              aria-label="Toggle navigation"
              type="button"
              className="navbar-toggler"
              onClick={this.toggle}
            >
              <RxRows className="navbarButton" />
            </button>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/skills"} className="nav-link">
                    Habilidades
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/projects"} className="nav-link">
                    Projetos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contato
                  </Link>
                </li>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
