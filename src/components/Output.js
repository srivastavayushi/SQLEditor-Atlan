import React from "react";
import styled from "styled-components";

const Output = ({ srcDoc }) => {
  return (
    <OutputStyled>
      <div className="output-pane">
        <div className="output-container">
          <div className="output-title">Output</div>
          <div className="output-wrapper">
            {/* <iframe
              srcDoc="Hi My name is Shivansh"
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
            /> */}
            <p className="">
              Execute a valid query first, Like:
              <br />
              <br />
              <span className="">SELECT * FROM {"  "}</span>
              ORDERS
            </p>
          </div>
        </div>
      </div>
    </OutputStyled>
  );
};

const OutputStyled = styled.div`
  flex-grow: 1;
  margin: 0 1rem 1rem 1rem;
  .output-pane {
    height: 100%;
    display: flex;
  }
  .output-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .output-title {
    display: flex;
    justify-content: space-between;
    background-color: var(--sidebar-dark-color);
    padding: 1rem;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
    border-bottom: 1px solid var(--border-color);
  }

  .output-wrapper {
    flex-grow: 1;
    background-color: var(--sidebar-dark-color);
    transition: all 0.3s ease;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    overflow: hidden;
    padding: 1rem;
    color: var(--font-light-color);
  }
`;

export default Output;
