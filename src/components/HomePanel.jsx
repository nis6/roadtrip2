import React from "react";
import svgs from "../assets";
import Logo from "./logo";
import StartButton from "./StartButton";

export default function HomePanel() {
  return (
    <div className="home-panel">
      <Logo />
      <div className="start">
        <h1>Have stories to tell not stuff to show.</h1>
        <p>Plan your trip now!</p>
        <div className="plan-image">
          <img src={svgs.trip} alt="destination on map" />
        </div>
        <StartButton />
      </div>
    </div>
  );
}
