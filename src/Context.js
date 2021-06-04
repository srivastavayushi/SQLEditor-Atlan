import React, { createContext, useState } from "react";

const SQLContext = createContext();

const ContextProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
  const [editorTheme, setEditorTheme] = useState("material-palenight");

  return (
    <SQLContext.Provider
      value={{
        navToggle,
        setNavToggle,
        theme,
        setTheme,
        editorTheme,
        setEditorTheme,
      }}
    >
      {children}
    </SQLContext.Provider>
  );
};

export { ContextProvider, SQLContext };
