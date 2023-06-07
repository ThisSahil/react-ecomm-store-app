import { useEffect, useState } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Mockman from "mockman-js";

import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Greetings from "./components/Greetings/Greetings";

import { useAuth0 } from "@auth0/auth0-react";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

      {/* <Route path="/mockman" element={<Mockman />} /> */}
    </div>
  );
}

export default App;
