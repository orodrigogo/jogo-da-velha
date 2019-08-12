import React from "react";
import "./style.css";

const MenuHash = ({ onClick }) => (
  <a href="#to-do" className="menu-hash" onClick={onClick}>
    <span className="midlle">Menu</span>
  </a>
);

export default MenuHash;
