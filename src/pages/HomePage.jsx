import React, { Component, Fragment } from "react";
import "./Home.css";

import axios from "axios";
import ProductsCard from "../components/card/ProductsCard";
import { toast } from "react-toastify";

export class HomePage extends Component {
  state = {
    products: [],
  };
  async getProducts() {
    try {
      let { data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      this.setState({ products: data});
    } catch (err) {
      console.log(err);
      toast.error("Error");
    }
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const { products } = this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="products-header">
              <h2 className="products-title">Our Latest Products</h2>
            </div>
            <div className="products-row">
              {products.map((product) => (
                <ProductsCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
