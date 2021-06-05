import React from "react";
import data from "../customers.json";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { CSVLink } from "react-csv";
import styled from "styled-components";

const OutputTable = () => {
  const columns = Object.keys(data[0]);
  const headers = columns.map((col) => {
    return {
      label: col,
      key: col,
    };
  });

  const csvReport = {
    data: data,
    headers: headers,
    filename: "customers.csv",
  };

  return (
    <OutputTableStyled>
      <table className="table">
        {
          <tr className="row">
            {columns.map((column) => (
              <th className="row__cell header">
                <p className="success">{column.toUpperCase()}</p>
              </th>
            ))}
          </tr>
        }
        {data.map((row) => (
          <tr className="row">
            {columns.map((col) => (
              <td className="cell row__cell">
                <p>{row[col]}</p>
              </td>
            ))}
          </tr>
        ))}
      </table>
      <CSVLink {...csvReport}>
        <span className="download">
          <GetAppOutlinedIcon className="icon success" />
          <span className="success link">Download CSV</span>
        </span>
      </CSVLink>
    </OutputTableStyled>
  );
};

const OutputTableStyled = styled.div`
  width: 100%;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2a2d3e;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--font-light-color);
  }
`;

export default OutputTable;
