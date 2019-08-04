import React from "react";
import "./style.css";

import InputHash from "../input-hash";
import LabelHash from "../labelHash";

const ShowEvents = ({ id, type, content, htmlfor, className }) => (
  <div className="show-events">
    <InputHash id="inputCheck" type="checkbox" value="" className="input-hash" />
    <LabelHash htmlfor="inputCheck" content="Mostrar eventos" className="label-hash" />
  </div>
);

export default ShowEvents;
