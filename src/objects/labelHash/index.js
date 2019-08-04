import React from "react";

const LabelHash = ({ htmlfor = "", content = "", className = "" }) => (
  <label htmlFor={htmlfor} className={className}>
    {content}
  </label>
);

export default LabelHash;
