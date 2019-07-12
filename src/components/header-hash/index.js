import React from "react";
import "./style.css";
import Logo from "../../objects/logo-hash";
import AboutHash from "../../objects/about-hash";
import MenuHash from "../../objects/menu-hash";

const HeaderHash = () => (
  <header className="header-hash">
    <Logo />
    <AboutHash />
    <MenuHash />
  </header>
);

export default HeaderHash;
