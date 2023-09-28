import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Layout.css";

import shoppingCart from "../../assets/images/shopping-cart.svg";
import { Button } from "react-bootstrap";
import axios from "axios";

export class Header extends Component {
  state = {
    category: [],
  };
  async getCategory() {
    try {
      let { data } = await axios(
        `https://fakestoreapi.com/products/categories`
      );
      this.setState({category: data})
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getCategory();
  }
  render() {
    const {category} = this.state;
    return (
      <header>
        <nav className="container nav-container">
          <ul className="nav d-flex nav-menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/products/category/${category[0]}`}>
                Electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/products/category/${category[1]}`}>
                Jewelery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/products/category/${category[2]}`}>
                Men's clothing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/products/category/${category[3]}`}>
                Women's clothing
              </NavLink>
            </li>
          </ul>
          <Button className="cart-btn d-flex gap-1">
            <p>Cart</p>
            <img src={shoppingCart} alt="Cart" />
          </Button>
        </nav>
      </header>
    );
  }
}

export default Header;
