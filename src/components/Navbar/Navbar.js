import { RxRows } from "react-icons/rx";
import React, { Component } from "react";
import { Collapse, Navbar, Nav } from "reactstrap";

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
          <Navbar expand="md">
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
                  <a href="#/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#/" className="nav-link">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#/" className="nav-link">
                    Projetos
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#/" className="nav-link">
                    Contato
                  </a>
                </li>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
