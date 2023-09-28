import React, { Component } from "react";
import star from "../../assets/images/star.svg";

import "../../pages/Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ProductsCard extends Component {
  render() {
    const { id, title, price, description, category, image, rating } =
      this.props;
    const {rate, count} = rating;
    return (
      <Link to={`products/${id}`} className="product-card">
        <div className="card-image">
          <img
            className="card-img"
            src={image}
            alt="Product"
          />
          <div>
            <p className="card-category">{category}</p>
          </div>
        </div>
        <div className="card-content">
          <h3 className="product-title">
            {title}
          </h3>
          <div className="product-price-id">
            <p className="product-id">
              Identifier number: <span>{id}</span>
            </p>
            <p className="product-price">${price}</p>
          </div>
          <p className="product-description">
           {description}
          </p>
          <div className="product-rating mt-2 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 my-3">
              <img src={star} alt="star" />
              <p className="rating">{rate}</p>
            </div>
            <Button variant="danger">Add to Cart</Button>
            <p className="product-stock">
              Stock: <span>{count}</span>
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProductsCard;
