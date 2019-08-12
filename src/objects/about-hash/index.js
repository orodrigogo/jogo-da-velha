import React from "react";
import "./style.css";

const AboutHash = ({ className = " ", onClick }) => {
  return (
    <a href="#to-do" className={`about-hash ${className}`} onClick={onClick}>
      Sobre
    </a>
  );
};

export default AboutHash;
