import React from "react";
import "./nav.css";
import imagegrid from "./imagegrid.png";

export default function Nav() {
  return (
    <>
      <nav>
        <a
          href="#about"
          style={{
            textDecoration: "none",
            fontFamily: "poppins",
            fontSize: "30px",
          }}
        ></a>

        <span className="rachel-link"></span>
      </nav>
      <img src={imagegrid} alt="woman excercising" />
      <div id="move"></div>
    </>
  );
}
