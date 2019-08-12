import React, { useState } from "react";
import "./App.css";

import HeaderHash from "./components/header-hash";
import GameTable from "./components/Game-Table";
import ShowEvents from "./objects/show-events";
import AboutLayer from "./objects/about-layer";
import HeaderAboutLayer from "./objects/header-AboutLayer";
import AboutDeveloper from "./components/about-developer";

function App() {
  const [aboutShow, setaboutShow] = useState("");

  const handleclickAdd = () => setaboutShow("-show");
  const handleclickRemove = () => setaboutShow("");

  return (
    <main className="app">
      <HeaderHash onClick={handleclickAdd} />
      <GameTable />
      <ShowEvents />

      <AboutLayer className={aboutShow}>
        <HeaderAboutLayer onClick={handleclickRemove} />

        <AboutDeveloper />
      </AboutLayer>
    </main>
  );
}
export default App;
