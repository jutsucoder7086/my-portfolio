import React, { createContext, useContext, useEffect, useState } from "react";
import {colors} from "./colors"

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const currentColors = isDarkMode ? colors.dark : colors.light;
    for (const [key, value] of Object.entries(currentColors)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
