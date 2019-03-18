import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => {
  return (
    <a href="https://www.reacts.org">
      <div className="app">
        <HeaderContainer />
        <CardContainer />
      </div>
    </a>
  );
};

export default App;
