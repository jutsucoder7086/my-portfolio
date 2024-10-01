import React from "react";
import "./Header.css"; // Import CSS file for styling
import { IoMoonOutline, IoSunnySharp } from "react-icons/io5";
import { useTheme } from "../ThemeContext";
import avatar from "../assets/avatar.jpg"; 

const Header = () => {

    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className={`header`}>
      <div className="header-left">
        <img className="avatar" src={avatar} alt="Avatar" />
      </div>
      <div className="header-center">
        <nav className="nav">
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item">Projects</a>
          <a href="#" className="nav-item">Blogs</a>
          <a href="#" className="nav-item">Contact</a>
        </nav>
      </div>
      <div className="header-right">
        <button className="toggle-button" onClick={toggleTheme} >
          {isDarkMode ? <IoMoonOutline color="teal"/> : <IoSunnySharp color="black"/>}
        </button>
      </div>
    </header>
  );
};

export default Header;
