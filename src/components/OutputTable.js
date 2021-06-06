import React from "react";
import styled from "styled-components";

const OutputTable = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <OutputTableStyled>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>
                <p>{column.toUpperCase()}</p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col, index) => (
                <td key={index}>
                  <p>{row[col]}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </OutputTableStyled>
  );
};

const OutputTableStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  table,
  th,
  td {
    border: 2px solid var(--border-color);
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    padding: 0.5rem 1rem;
  }
  th p {
    font-size: 0.9rem;
    color: var(--primary-color);
  }
  td {
    padding: 0.5rem 1rem;
    text-align: center;
    width: 11.11%;
  }
  td p {
    font-size: 0.8rem;
    color: var(--white-color);
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2a2d3e;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--font-light-color);
  }

  @media screen and (max-width: 1800px) {
  }
`;

export default OutputTable;
