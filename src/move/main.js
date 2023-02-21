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
      <div className="column-1">
        <div className="weekday" key={weekday.toString()}>
          {" "}
          {weekday}
        </div>
        {listMoves}
      </div>
      <div className="column-2">
        {" "}
        <blockquote>don't count the days, make the days count </blockquote>
      </div>
    </section>
  );
}
