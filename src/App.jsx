import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css"; // Import global styles
import About from "./components/About";
import { ThemeProvider } from "./ThemeContext";
import Home from "./components/home/Home";

const App = () => {

  return (
    // <div className={`app ${isDarkMode ? "dark" : "light"}`}>
    <ThemeProvider>
      <Header/>
      <Home />
    </ThemeProvider>
    // </div>
  );
};

export default App;
