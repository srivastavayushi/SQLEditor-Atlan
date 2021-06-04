import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { SQLContext } from "../Context";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";

const EditorPage = () => {
  const { navToggle } = useContext(SQLContext);

  return (
    <>
      <Sidebar navToggle={navToggle} />
      <Navbar />
      <EditorPageStyled>
        <Editor />
      </EditorPageStyled>
    </>
  );
};
export default EditorPage;

const EditorPageStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 90vh;
  background-color: var(--sidebar-dark-color);
  @media screen and (max-width: 1280px) {
    margin-left: 12rem;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
