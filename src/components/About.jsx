import React from "react";
import { useTheme } from "../ThemeContext";
import "./About.css"

const About = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`main-container`}>
      <h1>My NAME IS PARASMANI</h1>
    </div>
  );
};

export default About;
