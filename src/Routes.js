import React from "react";
import Products from "pages/Products";
import Checkout from "pages/Checkout";
import HomePage from "pages/HomePage";
import Cart from "pages/Cart";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductDetails from "pages/ProductDetails";
import Completed from "pages/Completed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
