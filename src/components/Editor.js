import React, { useState } from "react";
import styled from "styled-components";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/sql/sql";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Editor = ({ query, setQuery }) => {
  const [open, setOpen] = useState(true);

  return (
    <EditorStyled>
      <div className="editor-pane">
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
          <div className="editor-title">
            Enter Queries Here
            <button
              type="button"
              className="expand-collapse-btn"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
              {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </button>
          </div>
          <ControlledEditor
            onBeforeChange={(editor, data, value) => {
              setQuery(value);
            }}
            value={query}
            className="code-mirror-wrapper"
            options={{
              lineWrapping: true,
              lint: true,
              mode: "sql",
              theme: "material",
              lineNumbers: true,
            }}
          />
        </div>
      </div>
    </EditorStyled>
  );
};

const EditorStyled = styled.div`
  .editor-pane {
    height: 40vh;
    margin: 1rem;
    display: flex;
  }
  .editor-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .editor-container.collapsed .code-mirror-wrapper {
    flex-grow: 0;
  }

  .editor-container.collapsed .CodeMirror-scroll {
    position: absolute;
    overflow: hidden !important;
  }
  .CodeMirror {
    height: 100%;
  }

  .expand-collapse-btn {
    margin-left: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--font-light-color);
  }

  .editor-title {
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
    background-color: var(--sidebar-dark-color);
    color: var(--font-light-color);
    transition: all 0.3s ease;
  }
`;

export default Editor;
