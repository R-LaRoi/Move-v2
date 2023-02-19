import React from "react";
import "./nav.css";
import imagegrid from "./imagegrid.png";

export default function Nav() {
  return (
    <>
      <nav>
        <span className="wtm">what's the move</span>
        <span className="rachel-link">
          <a href="#about" style={{ textDecoration: "none" }}>
            meet rachel
          </a>
        </span>
      </nav>
      <img src={imagegrid} alt="woman excercising" />
      <div id="move"></div>
    </>
  );
}
