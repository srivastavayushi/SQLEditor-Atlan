import React, { useState } from "react";
import styled from "styled-components";
import codemirror from "codemirror";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/sql/sql";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Editor = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  return (
    <EditorStyled>
      <div className="pane top-pane">
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
          <div className="editor-title">
            SQL
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
  .top-pane {
    background-color: var(--sidebar-dark-color);
  }

  .pane {
    height: 50vh;
    width: 50%;
    display: flex;
  }

  .editor-container {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  .editor-container.collapsed {
    flex-grow: 0;
  }

  .editor-container.collapsed .CodeMirror-scroll {
    position: absolute;
    overflow: hidden !important;
  }

  .expand-collapse-btn {
    margin-left: 0.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .editor-title {
    display: flex;
    justify-content: space-between;
    background-color: hsl(225, 6%, 13%);
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  .CodeMirror {
    height: 100% !important;
  }

  .code-mirror-wrapper {
    flex-grow: 1;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    overflow: hidden;
  }
`;

export default Editor;
