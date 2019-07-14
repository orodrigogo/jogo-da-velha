import React from "react";
import "./style.css";
import Player from "../../objects/player-character";
import SectionHash from "../../objects/section-hash";

const GameTable = () => (
  <SectionHash>
    <ul className="game-table">
      <li className="items">
        <Player player="x" />
      </li>
      <li className="items">
        <Player player="o" />
      </li>
      <li className="items">
        <Player player="o" />
      </li>
      <li className="items">
        <Player player="o" />
      </li>
      <li className="items">
        <Player player="x" />
      </li>
      <li className="items">
        <Player player="o" />
      </li>
      <li className="items">
        <Player player="o" />
      </li>
      <li className="items">
        <Player player="o" />
      </li>
      <li className="items">
        <Player player="x" />
      </li>
    </ul>
  </SectionHash>
);

export default GameTable;
