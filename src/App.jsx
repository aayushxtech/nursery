import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div
      className="main-wrapper overflow-fix"
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="constrained-width"
        style={{
          padding: 0,
          margin: "0 auto",
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
