import React, { useContext } from "react";
import styled from "styled-components";
import OutputTable from "./OutputTable";
import { SQLContext } from "../Context";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { CSVLink } from "react-csv";
import data from "../customers.json";
import data2 from "../customers2.json";
import data3 from "../customers3.json";

const Output = () => {
  const { dataOption } = useContext(SQLContext);

  return (
    <OutputStyled>
      <div className="output-pane">
        <div className="output-container">
          <div className="output-title">
            Output{" "}
            {/* {dataOption !== "" && (
              <CSVLink {...csvReport}>
                <span className="download_csv">
                  <GetAppOutlinedIcon />
                </span>
              </CSVLink> 
            )}*/}
          </div>
          <div className="output-wrapper">
            {dataOption === "data" && <OutputTable data={data} />}
            {dataOption === "data2" && <OutputTable data={data2} />}
            {dataOption === "data3" && <OutputTable data={data3} />}
            {dataOption === "" && (
              <>
                <div className="">Execute some sample queries,</div>
                <br />
                <div className="output-queries">
                  <div>Example: </div>
                  <div className="output-queries-example">
                    <div>SELECT * FROM customers</div>
                    <div>SELECT contactName,city,country FROM customers</div>
                    <div>SELECT * FROM customers WHERE country="Germany"</div>
                  </div>
                </div>
              </>
            )}
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

    .output-queries {
      display: flex;
      .output-queries-example {
        margin-left: 1rem;
        color: var(--primary-color);
        div {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Output;
