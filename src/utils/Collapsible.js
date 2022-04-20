import React from "react";
import useCollapse from "react-collapsed";

function Collapsible({ article }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <h3>{isExpanded ? "Collapse Article" : "Show Article"}</h3>
      </div>
      <div {...getCollapseProps()}>
        <div className="content"></div>
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default Collapsible;
