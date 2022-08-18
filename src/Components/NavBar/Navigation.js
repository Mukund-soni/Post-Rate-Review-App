import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import "./NavBar.css";

class NavBar extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { item, size, increment } = this.context;

    return (
      <div>
        <div className="navbar__component">
          <Link to="">
            <div className="navbar__logo"></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
