import React from "react";
import Entry from "./move/entry";
import Main from "./move/main";
import Meet from "./move/meet";
import Nav from "./move/nav";
import Footer from "./move/footer";

const dailyRoutine = [
  {
    key: 1,
    id: 1,
    day: "wed",
    routine: ["jumping jacks", "push-ups", "inch worms", "burpees", "plank"],
  },
  {
    id: 2,
    day: "tue",
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
    day: "mon",
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
    <div className="container" style={{ boxSizing: "border-box" }}>
      <Nav />
      <Meet />
      <Entry />
      <div className="ex-log" key={info}>
        {info}
      </div>
      <Footer />
    </div>
  );
}

export default App;
