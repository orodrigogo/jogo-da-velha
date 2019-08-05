import React from "react";
import "./style.css";

import CloseAbout from "../close-about";
import AboutHash from "../about-hash";
import LogoHash from "../logo-hash";
import HeaderLayer from "../header-layer";
import LayerSection from "../layer-section";
import AboutDeveloper from "../../components/about-developer";
import ArticleLayer from "../article-layer";

const AboutLayer = ({ className }) => (
  <LayerSection className="about-layer">
    <HeaderLayer className="header-aboutLayer">
      <LogoHash />
      <AboutHash className="-pale" />
      <CloseAbout />
    </HeaderLayer>

    <ArticleLayer className="aboutDeveloper-wrapper">
      <AboutDeveloper />
    </ArticleLayer>
  </LayerSection>
);

export default AboutLayer;
