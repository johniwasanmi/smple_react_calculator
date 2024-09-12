import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Screen from "./components/screen/Screen";
import Button from "./components/buttons/Button";
import Calculator from "./components/buttons/Calculator";

import CalcBody from "./components/body/CalcBody";

function App() {
  const [screen, setScreen] = useState("");
  // return (
  //   <>
  //     <Calculator />
  //   </>
  // );
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Simple React Calculator</h1>
      <CalcBody></CalcBody>
    </>
  );
}

export default App;
