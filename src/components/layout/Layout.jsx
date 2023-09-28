import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
