import "./App.css";
import React from "react";
import LoginPanel from "./components/LoginPanel";
import WorldStatsPanel from "./components/WorldStatsPanel";

function App() {
  return (
    <React.Fragment>
      <LoginPanel />
      <WorldStatsPanel />
    </React.Fragment>
  );
}

export default App;
