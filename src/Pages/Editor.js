import React from "react";
import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <div className="details">
      <div className="details-container">
        <header className="details-header">
          <h3></h3>
        </header>
        <div className="details-main">
          <Link to="/" className="btn1">
            Back to list of branches
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Editor;
