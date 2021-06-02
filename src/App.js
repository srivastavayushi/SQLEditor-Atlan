import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch as Switching, Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./Pages/Landing";
import Editor from "./Pages/Editor";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <AppContentStyled>
      <div className="App">
        <div className="theme">
          <div className="light-dark-mode">
            <div className="left-content">
              <Brightness4Icon />
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{ "aria-label": "Theme Switch" }}
                size="medium"
                onClick={themeToggler}
              />
            </div>
          </div>
        </div>
      </div>
      <MainContentStyled>
        <Switching>
          <Route exact path="/" component={Landing} />
          <Route exact path="/editor" component={Editor} />
        </Switching>
      </MainContentStyled>
    </AppContentStyled>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1280px) {
    margin-left: 12rem;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
const AppContentStyled = styled.main`
  .light-dark-mode {
    position: fixed;
    top: 1rem;
    right: 0;
    @media screen and (max-width: 1200px) {
      top: 5rem;
    }
  }
`;

export default App;
