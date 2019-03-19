import React from "react";
import "./Display.css";

function CalculatorDispay(props) {
    return (
        <div className={props.buttonsStyle}>{props.text}</div>
    );
  }
  
  export default CalculatorDispay;