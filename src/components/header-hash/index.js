import React from "react";
import "./style.css";
import MenuHash from "../../objects/menu-hash";
import AboutHash from "../../objects/about-hash";
import Logo from "../../objects/logo-hash";

const HeaderHash = ({ className, onClick }) => (
  <header className="header-hash">
    <Logo />
    <AboutHash onClick={onClick} />
    <MenuHash onClick={onClick} />
  </header>
);

export default HeaderHash;
