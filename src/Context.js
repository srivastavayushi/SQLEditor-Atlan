import React, { createContext, useState } from "react";

const SQLContext = createContext();

const ContextProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
  const [editorTheme, setEditorTheme] = useState("material-palenight");
  const [query, setQuery] = useState("SELECT * FROM customers");
  const [dataOption, setDataOption] = useState("");

  return (
    <SQLContext.Provider
      value={{
        navToggle,
        setNavToggle,
        theme,
        setTheme,
        editorTheme,
        setEditorTheme,
        dataOption,
        setDataOption,
        query,
        setQuery,
      }}
    >
      {children}
    </SQLContext.Provider>
  );
};

export { ContextProvider, SQLContext };
