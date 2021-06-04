import React, { useState, useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { SQLContext } from "../Context";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Output from "../components/Output";
import EditorButton from "../components/EditorButton";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import ClearAllOutlinedIcon from "@material-ui/icons/ClearAllOutlined";

const EditorPage = () => {
  const { navToggle } = useContext(SQLContext);
  const [srcDoc, setSrcDoc] = useState("");
  const [query, setQuery] = useState("SELECT * FROM ORDERS");

  const handleClearClick = () => {
    setQuery("");
  };

  return (
    <>
      <Sidebar navToggle={navToggle} />
      <Navbar />
      <EditorPageStyled>
        <div className="editor-buttons">
          <EditorButton title={"Run"}>
            <PlayArrowOutlinedIcon className="editor-buttons-icon" />
          </EditorButton>
          <EditorButton title={"Clear"}>
            <ClearAllOutlinedIcon
              className="editor-buttons-icon"
              onClick={handleClearClick}
            />
          </EditorButton>
        </div>
        <div className="pane">
          <Editor query={query} setQuery={setQuery} />
          <Output srcDoc={srcDoc} />
        </div>
      </EditorPageStyled>
    </>
  );
};
export default EditorPage;

const EditorPageStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 90vh;
  background-color: var(--background-dark-color);
  .editor-buttons {
    height: 10vh;
    display: flex;
    align-items: center;
    .editor-buttons-icon {
      font-size: 1.3rem;
      vertical-align: bottom;

      color: var(--font-light-color);
    }
  }
  .pane {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1280px) {
    margin-left: 12rem;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
