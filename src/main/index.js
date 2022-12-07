import React from "react";
import "./main.css";
import Inputs from "./inputs";
import Outputs from "./outputs";

const Main = () => {
  // states etc.
  return (
    <div className="main-div">
      <Inputs></Inputs>
      <Outputs></Outputs>
    </div>
  );
};

export default Main;
