import React from "react";
import X from "../../img/X.png";
import Circle from "../../img/Circle.png";

const playerItem = () => (
  <>
    <img src={X} alt="Imagem do x" className="player-item" />
    <img src={Circle} alt="Imagem do circulo" className="player-item" />
  </>
);

export default playerItem;
