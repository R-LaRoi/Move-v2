import React from "react";
import "./dailyInput.css";

export default function DailyInput(props) {
  let dayLog = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const dateLog = new Date();
  const dayOfWeek = dayLog[dateLog.getDay()];

  return (
    <section className="main">
      <div className="column-one">
        {" "}
        <blockquote>you are unstoppable </blockquote>
      </div>

      <div className="column-two">
        <div className="weekday">{dayOfWeek}</div>
        <div className="list-routine">
          <ul>
            <li
              style={{
                color: "white",
                paddingRight: "20%",
                marginLeft: "-20%",
              }}
            >
              {props.routine}

              {/*  splits a part of the string to display using -->
            {savedWrkout.slice("\n")[0]} */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
