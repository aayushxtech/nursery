import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";

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
        <Products />
      </div>
    </div>
  );
}

export default App;
