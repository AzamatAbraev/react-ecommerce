import React, { Component, Fragment } from "react";
import axios from "axios";

import "./Product.css";
import { Button } from "react-bootstrap";

export class ProductPage extends Component {
  state = {
    product: null,
  };

  async getProduct() {
    let productId = window.location.pathname.split("/").at(-1);
    try {
      let { data } = await axios(
        `https://fakestoreapi.com/products/${productId}`
      );
      this.setState({ product: data });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;

    return (
      <Fragment>
        <section>
          <div className="container">
            <p className="product-publish">Published at 12.08.2023</p>
            <h1 className="product-title">{product?.title}</h1>
            <div className="product-info d-flex">
              <img
                className="w-100 p-5 product-image"
                src={product?.image}
                alt=""
              />
              <div className="product-desc">
                <p className="product-text">
                  Category: <span>{product?.category}</span>
                </p>
                <p className="product-text">
                  <span>{product?.description}</span>
                </p>
                <p className="product-text">
                  Price: <span className="text-danger">${product?.price}</span>
                </p>
                <p className="product-text">
                  Rating: <span className="text-danger">{product?.rating.rate}</span>
                </p>
                <p className="product-text">
                  Stock: <span className="text-danger">{product?.rating.count}</span>
                </p>
                <Button variant="danger">Add to Cart</Button>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ProductPage;
