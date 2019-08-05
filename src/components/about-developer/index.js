import React from "react";
import "./style.css";

import Image from "../../img/cris.png";
import GitHub from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Facebook from "../../img/facebook.png";
import Twitter from "../../img/twitter.png";
import Instagran from "../../img/instagran.png";
import NetworkIcon from "../../objects/network-icon";
import ImageProfile from "../../objects/image-profile";

const AboutDeveloper = () => (
  <dl className="about-developer">
    <dd className="image">
      <ImageProfile src={Image} alt="Foto do desenvolvedor" />
    </dd>
    <dt className="title">Cristiano Morgante</dt>
    <dd className="description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, voluptates? Veniam dolorum
      aliquam quisquam quae!
    </dd>
    <dd className="networks">
      <NetworkIcon href="https://github.com/CristianoMorgante" src={GitHub} alt="Icone do Github" />
      <NetworkIcon
        href="https://linkedin.com/in/cristianomorgante/"
        src={Linkedin}
        alt="Icone do Linkedin"
      />
      <NetworkIcon
        href="https://facebook.com/cristianomorganteguitar"
        src={Facebook}
        alt="Icone do Facebook"
      />
      <NetworkIcon href="https://twitter.com/Cristiano__M__" src={Twitter} alt="Icone do Twitter" />
      <NetworkIcon
        href="https://instagram.com/cristiano_morgante/"
        src={Instagran}
        alt="Icone do Instagran"
      />
    </dd>
  </dl>
);

export default AboutDeveloper;
