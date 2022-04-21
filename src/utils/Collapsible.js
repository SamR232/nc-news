import React from "react";
import useCollapse from "react-collapsed";
import LikeButton from "../components/LikeButton";

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
        <LikeButton />
      </div>
    </div>
  );
}

export default Collapsible;
