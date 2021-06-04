import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { SQLContext } from "../Context";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Output from "../components/Output";

const EditorPage = () => {
  const { navToggle } = useContext(SQLContext);
  const [srcDoc, setSrcDoc] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      <Sidebar navToggle={navToggle} />
      <Navbar />
      <EditorPageStyled>
        <div className="editor-buttons">buttons</div>
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
