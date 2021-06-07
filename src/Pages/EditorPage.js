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
import BrushIcon from "@material-ui/icons/Brush";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { format } from "sql-formatter";

const EditorPage = () => {
  const { navToggle, setDataOption, query, setQuery } = useContext(SQLContext);
  const handleClearClick = () => {
    setQuery("");
    setDataOption("");
  };

  const handleFormatClick = () => {
    setQuery(
      format(query, {
        uppercase: true,
      })
    );
  };

  const handleRunClick = () => {
    if (format(query.toUpperCase()) === format("SELECT * FROM CUSTOMERS")) {
      setDataOption("data");
    } else if (
      format(query.toUpperCase()) ===
      format("SELECT CONTACTNAME, CITY, COUNTRY FROM CUSTOMERS")
    ) {
      setDataOption("data2");
    } else if (
      format(query.toUpperCase()) ===
      format(`SELECT * FROM CUSTOMERS WHERE COUNTRY="GERMANY"`)
    ) {
      setDataOption("data3");
    } else {
      setDataOption("noQuery");
    }
  };

  return (
    <>
      <Sidebar navToggle={navToggle} />
      <Navbar />
      <EditorPageStyled>
        <div className="editor-buttons">
          <div>
            <EditorButton title={"Run"} onClick={handleRunClick}>
              <PlayArrowOutlinedIcon className="editor-buttons-icon" />
            </EditorButton>
            <EditorButton title={"Clear"} onClick={handleClearClick}>
              <ClearAllOutlinedIcon className="editor-buttons-icon" />
            </EditorButton>
            <EditorButton title={"Format"} onClick={handleFormatClick}>
              <BrushIcon className="editor-buttons-icon" />
            </EditorButton>
          </div>
          <div className="editor-search">
            <EditorButton title={"Details"} onClick={handleFormatClick}>
              <InfoOutlinedIcon className="editor-buttons-icon" />
            </EditorButton>
            <div className="editor-search-bar">
              <input type="text" name="search" placeholder="Search" />
              <SearchOutlinedIcon className="editor-buttons-icon" />
            </div>
          </div>
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
    }
    .editor-search {
      display: flex;
      .editor-search-bar {
        margin-left: 1rem;
        background-color: var(--sidebar-dark-color);
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 2px;
        color: var(--font-light-color);
        font-size: 1rem;
        input {
          height: 100%;
          background: none;
          border: none;
          color: var(--font-light-color);
          &::placeholder {
            color: var(--font-light-color);
            font-size: 1rem;
          }
          &:focus {
            outline: 0;
          }
        }
      }
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
