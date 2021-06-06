import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </>,
  document.getElementById("root")
);
