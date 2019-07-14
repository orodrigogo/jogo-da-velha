import React from "react";
import "./App.css";
import HeaderHash from "./components/header-hash";
import GameTable from "./components/Game-Table";

function App() {
  return (
    <main className="app">
      <HeaderHash />
      <GameTable />
    </main>
  );
}
export default App;
