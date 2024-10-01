import React from "react";
import avatar from "../../assets/avatar.jpg";
import "./Home.css";
import {intro} from '../../contents/home'

const Home = () => {
  return (
    <div className="main-container">
      <img className="avatar-home" src={avatar} alt="Avatar" />
      <h1 className="heading">Fullstack developer</h1>
      <p className="description">{intro}</p>
    </div>
  );
};

export default Home;
