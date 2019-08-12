import React from "react";
import "./styles.css";

import CloseAbout from "../close-about";
import AboutHash from "../about-hash";
import LogoHash from "../logo-hash";

const HeaderAboutLayer = ({ className = "", onClick }) => (
  <header className="header-aboutLayer">
    <LogoHash />
    <AboutHash className="-pale" onClick={onClick} />
    <CloseAbout onClick={onClick} />
  </header>
);

export default HeaderAboutLayer;
