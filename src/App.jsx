import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomComponent from "./CustomComponent";

function App() {
  return (
    <>
      <div className="react">
        <div></div>
        <h1>Anmol Neupane</h1>
        <CustomComponent />
        <CustomComponent />
        <CustomComponent />
        <CustomComponent />
        <CustomComponent />
      </div>
    </>
  );
}

export default App;
