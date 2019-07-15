import React from "react";
import "./App.css";
import WrapperShowEvents from "./components/wrapper-showEvents";
import HeaderHash from "./components/header-hash";
import GameTable from "./components/Game-Table";

function App() {
  return (
    <main className="app">
      <HeaderHash />
      <GameTable />
      <WrapperShowEvents />
    </main>
  );
}
export default App;
