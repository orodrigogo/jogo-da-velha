import React from "react";

const NetworkIcon = ({ href, src, alt }) => (
  <a href={href} target="_blanck">
    <img src={src} alt={alt} className="networkIcon" />
  </a>
);

export default NetworkIcon;
