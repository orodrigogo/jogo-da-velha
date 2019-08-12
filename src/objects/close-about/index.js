import React from "react";
import "./style.css";

const CloseAbout = ({ onClick }) => (
  <a href="#to-do" className="closeAbout" onClick={onClick}>
    <span className="content">Fechar</span>
  </a>
);

export default CloseAbout;
