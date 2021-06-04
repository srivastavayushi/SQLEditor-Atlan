import React from "react";
import data from "./orders.json";
import { MdAttachment } from "react-icons/md";
import { CSVLink } from "react-csv";

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
  filename: "data.csv",
};

const OutputTable = () => {
  return (
    <div className="table__wrapper">
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
          <MdAttachment className="icon success" />
          <span className="success link">Download CSV</span>
        </span>
      </CSVLink>
    </div>
  );
};

export default OutputTable;
