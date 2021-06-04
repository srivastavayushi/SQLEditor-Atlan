import React from "react";
import styled from "styled-components";

const EditorButton = ({ title, onClick, children }) => {
  return (
    <EditorButtonStyled onClick={onClick}>
      {title} {children}
    </EditorButtonStyled>
  );
};

const EditorButtonStyled = styled.button`
  background-color: var(--sidebar-dark-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  color: var(--font-light-color);
  font-size: 1rem;
  margin: 0 0 0 1rem;
  cursor: pointer;
`;

export default EditorButton;
