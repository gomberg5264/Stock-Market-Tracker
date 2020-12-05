import React from "react";

import Navbar from "./components/navbar/Navbar";
import StockCard from "./components/stock-card/StockCard";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <StockCard />
    </div>
  );
};

export default App;
