import React from "react";
import Input from "./input.js";
import "./entry.css";

export default function Entry() {
  return (
    <div className="entry">
      <div className="card-entry">
        <div
          style={{
            fontSize: "120px",
            fontFamily: "poppins",
            fontWeight: "800",
            letterSpacing: "3px",
            marginTop: "-54%",
            paddingBottom: "60px",
            color: " #5648fe",
          }}
        >
          thursday
        </div>
      </div>

      <div className="card-entry-2" key={9}>
        <div
          style={{
            marginLeft: "7%",
            marginTop: "7%",

            color: "#5648fe",
            fontSize: "40px",
            fontWeight: "800",
            letterSpacing: "-4px",
          }}
        >
          feb 24
        </div>
        <Input />
      </div>
    </div>
  );
}
