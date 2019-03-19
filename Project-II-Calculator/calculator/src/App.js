import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/DisplayComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay text="0" />

      <div className="row">
        <ActionButton buttonStyle="clear" text="clear" />
        <NumberButton buttonStyle="operator" text="÷" />
      </div>

      <div className="row">
        <NumberButton buttonStyle="number" text="7" />
        <NumberButton buttonStyle="number" text="8" />
        <NumberButton buttonStyle="number" text="9" />
        <NumberButton buttonStyle="operator" text="×" />
      </div>

      <div className="row">
        <NumberButton buttonStyle="number" text="4" />
        <NumberButton buttonStyle="number" text="5" />
        <NumberButton buttonStyle="number" text="6" />
        <NumberButton buttonStyle="operator" text="-" />
      </div>

      <div className="row">
        <NumberButton buttonStyle="number" text="1" />
        <NumberButton buttonStyle="number" text="2" />
        <NumberButton buttonStyle="number" text="3" />
        <NumberButton buttonStyle="operator" text="+" />
      </div>

      <div className="row">
        <NumberButton buttonStyle="zero" text="0" />
        <NumberButton buttonStyle="operator" text= "=" />
      </div>
    </div>
  );
};

export default App;
