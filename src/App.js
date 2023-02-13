import React from "react";
import Entry from "./move/entry";
import Main from "./move/main";
import Meet from "./move/meet";
import Nav from "./move/nav";

const dailyRoutine = [
  {
    key: 1,
    id: 1,
    day: "tue",
    routine: ["jumping jacks", "push-ups", "inch worms", "burpees", "plank"],
  },
  {
    id: 2,
    day: "wed",
    key: 2,
    routine: [
      "bicep curls",
      "shoulder press",
      "skaters",
      "burpees",
      "broad jumps",
    ],
  },
  {
    id: 3,
    day: "thu",
    key: 3,
    routine: [
      "jump rope",
      "world's greatest stretch",
      "mountain climbers",
      "switch lunges",
      "kettlebell swings",
    ],
  },
];

function App() {
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
    <div className="move">
      <Nav />
      <Meet />
      <Entry />
      <div className="ex-log" key={info}>
        {info}
      </div>
    </div>
  );
}

export default App;
