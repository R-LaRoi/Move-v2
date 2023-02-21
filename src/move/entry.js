import React from "react";
import Input from "./input.js";
import "./entry.css";
import pic2 from "./pic2.png";

export default function Entry() {
  return (
    <div className="entry">
      <div className="card-entry">
        <span className="name"> rachel</span>
        <img src={pic2} alt="woman excercising"></img>
      </div>
      <div className="container" style={{ backgroundColor: "#E826d6" }}>
        <Input />
      </div>
    </div>
  );
}
