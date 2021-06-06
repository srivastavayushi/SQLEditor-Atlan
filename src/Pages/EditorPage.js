import React, { useContext } from "react";
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
  const { navToggle, setDataOption, query, setQuery } = useContext(SQLContext);
  const handleClearClick = () => {
    setQuery("");
    setDataOption("");
  };

  const handleRunClick = () => {
    if (query.toUpperCase() === "SELECT * FROM CUSTOMERS") {
      setDataOption("data");
    }
    if (
      query.toUpperCase() === "SELECT CONTACTNAME,CITY,COUNTRY FROM CUSTOMERS"
    ) {
      setDataOption("data2");
    }
    if (
      query.toUpperCase() === `SELECT * FROM CUSTOMERS WHERE COUNTRY="GERMANY"`
    ) {
      setDataOption("data3");
    }
  };

  return (
    <>
      <Sidebar navToggle={navToggle} />
      <Navbar />
      <EditorPageStyled>
        <div className="editor-buttons">
          <EditorButton title={"Run"} onClick={handleRunClick}>
            <PlayArrowOutlinedIcon className="editor-buttons-icon" />
          </EditorButton>
          <EditorButton title={"Clear"} onClick={handleClearClick}>
            <ClearAllOutlinedIcon className="editor-buttons-icon" />
          </EditorButton>
        </div>
        <div className="pane">
          <Editor />
          <Output />
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
    overflow: auto;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2a2d3e;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--font-light-color);
    }
  }

  @media screen and (max-width: 1280px) {
    margin-left: 12rem;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
