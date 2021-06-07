import React, { useEffect, useState, useContext } from "react";
import { Switch as Switching, Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./Pages/Landing";
import EditorPage from "./Pages/EditorPage";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import { SQLContext } from "./Context";

function App() {
  const { theme, setTheme, setEditorTheme } = useContext(SQLContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
      setEditorTheme("material-palenight");
    } else {
      setTheme("light-theme");
      setChecked(true);
      setEditorTheme("neo");
    }
  };

  return (
    <AppContentStyled>
      <div>
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
                className="theme-switch"
              />
            </div>
          </div>
        </div>
      </div>
      <Switching>
        <Route exact path="/" component={Landing} />
        <Route exact path="/editor" component={EditorPage} />
      </Switching>
    </AppContentStyled>
  );
}

const AppContentStyled = styled.main`
  .light-dark-mode {
    position: fixed;
    top: 12vh;
    right: 0;
  }
  .theme-switch span {
    color: var(--primary-color);
  }
`;

export default App;
