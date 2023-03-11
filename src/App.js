import DailyInput from "./move/dailyInput";
import Entry from "./move/entry";
import Input from "./move/input";
import Main from "./move/main";
import Meet from "./move/meet";
import Nav from "./move/nav";
import React, { useState } from "react";

const dailyRoutine = [
  {
    key: 1,
    id: 1,
    day: "wed",
    routine: [
      "world's greatest stretch",
      "scoops",
      "jump squats",
      "burpees",
      "push ups",
      "plank",
      "lunges",
    ],
  },
];

function App(props) {
  const info = dailyRoutine.map((workout) => {
    return (
      <Main
        weekday={workout.day}
        excercise={workout.routine}
        key={workout.key}
      />
    );
  });

  return (
    <div
      className="container"
      style={{ overflow: "hidden", marginLeft: "-.5rem", marginRight: "-1rem" }}
    >
      <Nav />
      <Meet />
      <Entry />
      <DailyInput />
      <div className="ex-log" key={info}>
        {info}
      </div>
    </div>
  );
}

export default App;
