// React
import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./Header/Header"
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

// CSS imports
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
