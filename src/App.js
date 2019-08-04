import React from "react";
import "./App.css";

import HeaderHash from "./components/header-hash";
import GameTable from "./components/Game-Table";
import ShowEvents from "./objects/show-events";

function App() {
  return (
    <main className="app">
      <HeaderHash />
      <GameTable />
      <ShowEvents />
    </main>
  );
}
export default App;
