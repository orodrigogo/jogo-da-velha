import React from "react";

const ArticleLayer = ({ className = "", children }) => (
  <article className={className}>{children}</article>
);

export default ArticleLayer;
