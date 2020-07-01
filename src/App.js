import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/DefaultPage";
import Products from "./pages/ProductsPage";
import SinglePoduct from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer */}
        <Navbar />
        <SideBar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={SinglePoduct} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
