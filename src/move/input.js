import React, { useState } from "react";
import "./entry.css";

export default function Input() {
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
        <ul>
          <li>{savedWrkout}</li>
        </ul>
        <button>let's move</button>
      </div>
    );
  else {
    return <div>{entryform}</div>;
  }
}
