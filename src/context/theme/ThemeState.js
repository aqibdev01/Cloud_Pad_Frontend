import React, { useState } from "react";
import themeContext from "./themeContext";

const ThemeState = (props) => {
  const [theme, setTheme] = useState("dark");
  const [btnText, setBtnText] = useState("Light Mode");
  return (
    <themeContext.Provider value={{ theme, setTheme, btnText, setBtnText }}>
      {props.children}
    </themeContext.Provider>
  );
};

export default ThemeState;
