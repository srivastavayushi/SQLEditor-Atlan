import React, { useEffect, useState } from "react";
import { Switch as Switching, Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./Pages/Landing";
import EditorPage from "./Pages/EditorPage";
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
`;

export default App;
