import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Main from "../pages/Main";
import ProductsDetail from "../pages/ProductsDetail";
import ShoppingCart from "../pages/ShoppingCart";

function PathRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/cart" element={<ShoppingCart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products-detail/:id" element={<ProductsDetail />} />
      </Routes>
    </Router>
  );
}

export default PathRouter;
