import React from "react";
import "./style.css";
import MenuHash from "../../objects/menu-hash";
import AboutHash from "../../objects/about-hash";
import Logo from "../../objects/logo-hash";
import HeaderLayer from "../../objects/header-layer";

const HeaderHash = ({ className }) => (
  <HeaderLayer className="header-hash">
    <Logo />
    <AboutHash />
    <MenuHash />
  </HeaderLayer>
);

export default HeaderHash;
