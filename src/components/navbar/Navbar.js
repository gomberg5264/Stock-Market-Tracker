import React from "react";

import Rotate from "react-reveal/Roll";

import navImg from "../../assets/image.jpg";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <Rotate top>
        <h1 className="nav-title">Stock Market Tracker</h1>
        <img className="img" src={navImg} alt="" />
      </Rotate>
    </nav>
  );
};

export default Navbar;
