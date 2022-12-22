import React from "react";
import HomePanel from "../components/HomePanel";
import svgs from "../assets/index";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero-image">
          <img src={svgs.explore} alt="Through the desert SVG" />
        </div>
        <HomePanel />
      </div>
    );
  }
}
