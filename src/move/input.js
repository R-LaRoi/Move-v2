import React, { useState } from "react";
import "./entry.css";

export default function Input() {
  let dayLog = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const dateLog = new Date();
  const dayOfWeek = dayLog[dateLog.getDay()];

  const entryform = (
    <form onSubmit={showWorkout}>
      <textarea
        className="enterExercise"
        type="text"
        placeholder="today i did..."
        onChange={logExercise}
      ></textarea>
      <input type="submit"></input>
    </form>
  );

  const [workout, setWorkout] = useState("");
  const [savedWrkout, setSavedWrkout] = useState("");

  function showWorkout(event) {
    event.preventDefault();
    const newWorkout = workout;
    setSavedWrkout(newWorkout);
  }

  function logExercise(event) {
    event.preventDefault();
    setWorkout(event.target.value);
  }

  if (savedWrkout)
    return (
      <div className="list-routine">
        <div
          className="weekday"
          style={{
            fontSize: "60px",
            fontWeight: "700",
            paddingBottom: "0px",
            marginLeft: "-20%",
          }}
        >
          {dayOfWeek}
        </div>
        <ul>
          <li
            style={{ color: "white", paddingRight: "20%", marginLeft: "-20%" }}
          >
            {savedWrkout}
          </li>
        </ul>
        <button id="move--button">let's move</button>
      </div>
    );
  else {
    return <div>{entryform}</div>;
  }
}
