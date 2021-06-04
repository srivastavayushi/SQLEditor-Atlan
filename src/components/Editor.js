import React, { useState } from "react";
import styled from "styled-components";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Editor = ({ query, setQuery }) => {
  const [open, setOpen] = useState(true);

  return (
    <EditorStyled>
      <div className={`editor-pane ${open ? "" : "collapsed"}`}>
        <div className="editor-container">
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
              theme: "material-palenight",
              lineNumbers: true,
              tabSize: 2,
              keyMap: "sublime",
            }}
          />
        </div>
      </div>
    </EditorStyled>
  );
};

const EditorStyled = styled.div`
  margin: 1rem;

  .editor-pane {
    display: flex;
    height: 100%;
  }
  .editor-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .collapsed .code-mirror-wrapper {
    flex-grow: 0;
    height: 0;
  }

  .collapsed .CodeMirror-scroll {
    position: absolute;
    overflow: hidden !important;
  }

  .collapsed .editor-title {
    border-radius: 0.2rem;
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
    background-color: var(--sidebar-dark-color);
    padding: 1rem 1rem 0.5rem 1rem;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
  }

  .code-mirror-wrapper {
    height: 30vh;
    flex-grow: 1;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    overflow: hidden;
    background-color: var(--sidebar-dark-color);
    color: var(--font-light-color);
    transition: all 0.3s ease;
  }
`;

export default Editor;
