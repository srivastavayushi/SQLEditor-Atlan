import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SQLContext } from "../Context";
import Sidebar from "../components/Sidebar";

const Editor = () => {
  const { navToggle } = useContext(SQLContext);

  return (
    <>
      <Sidebar navToggle={navToggle} />
      <EditorStyled>
        <Navbar />
      </EditorStyled>
    </>
  );
};
export default Editor;

const EditorStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  background-color: var(--sidebar-dark-color);
  @media screen and (max-width: 1280px) {
    margin-left: 12rem;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
