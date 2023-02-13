import React from "react";
import Input from "./input.js";
import "./entry.css";

export default function Entry() {
  return (
    <div className="entry">
      <div className="card-entry">
        <div
          style={{
            fontSize: "40px",
            fontFamily: "poppins",
            fontWeight: "400",
            letterSpacing: "2px",
            marginTop: "5%",
            paddingBottom: "60px",
          }}
        >
          {" "}
          consistency is key
        </div>
      </div>
      <div className="card-entry-2" key={9}>
        <Input />
      </div>
    </div>
  );
}
