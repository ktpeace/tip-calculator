import React, { useState } from "react";
import "./main.css";
import Inputs from "./inputs";
import Outputs from "./outputs";

const Main = () => {
  // states etc.
  const [billTotal, setBillTotal] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [numPeople, setNumPeople] = useState(0);

  return (
    <div className="main-div">
      <Inputs
        billTotal={billTotal}
        setBillTotal={setBillTotal}
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        numPeople={numPeople}
        setNumPeople={setNumPeople}
      />
      <Outputs
        billTotal={billTotal}
        setBillTotal={setBillTotal}
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        numPeople={numPeople}
        setNumPeople={setNumPeople}
      />
    </div>
  );
};

export default Main;
