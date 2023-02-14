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
            <i class="fa-brands fa-spotify"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-regular fa-at"></i>
          </a>
        </span>
      </nav>

      <img src={imagegrid} alt="woman excercising" />
      <div id="move"></div>
    </>
  );
}
