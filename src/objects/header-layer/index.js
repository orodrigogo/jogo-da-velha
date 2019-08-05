import React from "react";

const HeaderLayer = ({ children, className = "" }) => (
  <header className={className}>{children}</header>
);

export default HeaderLayer;
