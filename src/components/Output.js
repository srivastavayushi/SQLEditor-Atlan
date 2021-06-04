import React, { useState } from "react";
import styled from "styled-components";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Output = ({ srcDoc }) => {
  const [open, setOpen] = useState(true);

  return (
    <OutputStyled>
      <div className="output-pane">
        <div className={`output-container ${open ? "" : "collapsed"}`}>
          <div className="output-title">
            Enter Queries Here
            <button
              type="button"
              className="expand-collapse-btn"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
              {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </button>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="code-mirror-wrapper"
          />
        </div>
      </div>
    </OutputStyled>
  );
};

const OutputStyled = styled.div`
  .output-pane {
    height: 40%;
    margin: 1rem;
    display: flex;
  }
  .output-container {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  .output-container.collapsed {
    flex-grow: 0;
  }

  .expand-collapse-btn {
    margin-left: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--font-light-color);
  }

  .output-title {
    display: flex;
    justify-content: space-between;
    background-color: var(--background-dark-color);
    padding: 1rem 1rem 0.5rem 1rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  .code-mirror-wrapper {
    flex-grow: 1;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    overflow: hidden;
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
  }
`;

export default Output;
