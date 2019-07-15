import React from "react";
import CheckShow from "../../objects/check-show";
import ShowEvents from "../../objects/show-events";

const WrapperShowEvents = ({ children }) => (
  <div className="wrapper-showEvents">
    <CheckShow />
    <ShowEvents />
  </div>
);

export default WrapperShowEvents;
