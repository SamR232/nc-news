import React from "react";
import useCollapse from "react-collapsed";

function Collapsible({ article }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Collapse Article" : "Show Article"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content"></div>
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default Collapsible;
