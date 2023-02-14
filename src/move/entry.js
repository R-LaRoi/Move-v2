import React from "react";
import Input from "./input.js";
import "./entry.css";

export default function Entry() {
  return (
    <div className="entry">
      <div className="card-entry">
        <div
          style={{
            fontSize: "100px",
            fontFamily: "poppins",
            fontWeight: "800",
            letterSpacing: "3px",
            marginTop: "5%",
            paddingBottom: "60px",
            color: "#ffff",
          }}
        >
          thursday
        </div>
      </div>
      <div className="card-entry-2" key={9}>
        <div
          style={{
            position: "relative",
            left: "30%",
            top: "60%",
            color: "#5648fe",
            fontSize: "90px",
            fontWeight: "800",
            letterSpacing: "-4px",
          }}
        >
          let's move
        </div>
        <Input />
      </div>
    </div>
  );
}
