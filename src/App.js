import React from "react";
import Entry from "./move/entry";
import Meet from "./move/meet";
import Nav from "./move/nav";

function App() {
  return (
    <div className="move">
      <Nav />
      <Meet />
      <Entry />
    </div>
  );
}

export default App;
