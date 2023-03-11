import React, { useState } from "react";
import "./entry.css";

export default function Input() {
  const [workout, setWorkout] = useState("");
  const [dailyWorkout, setDailyWorkout] = useState(workout);
  // const [savedWrkout, setSavedWrkout] = useState(
  //   JSON.parse(localStorage.getItem("newWorkout")) || [] );

  // React.useEffect(() => {
  //  localStorage.setItem("newWorkout", JSON.stringify(workout));
  // }, [workout]);

  function showWorkout(e) {
    e.preventDefault();
    setDailyWorkout(workout);
  }

  function logExercise(e) {
    setWorkout(e.target.value);
  }

  console.log(dailyWorkout);
  if (dailyWorkout)
    return (
      <div>
        <div className="quote">...</div>
        <button>let's move</button>
      </div>
    );
  else {
    return (
      <div>
        <form onSubmit={showWorkout}>
          <textarea
            className="enterExercise"
            type="text"
            placeholder="today i did..."
            onChange={logExercise}
          ></textarea>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
