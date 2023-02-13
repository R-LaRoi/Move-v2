import React from "react";
import "./main.css";

export default function Main(props) {
  const weekday = props.weekday.toLowerCase();
  const routines = props.excercise;
  const listMoves = routines.map((routine) => (
    <li key={routine.toString()}>{routine}</li>
  ));

  return (
    <section className="main">
      <div className="card">
        <div
          className="weekday"
          style={{
            color: "#FD9C40",
            fontSize: "30px",
          }}
          key={weekday.toString()}
        >
          {" "}
          {weekday}
        </div>
        {listMoves}
      </div>
    </section>
  );
}
