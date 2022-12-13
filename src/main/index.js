import React, { useState } from "react";
import "./main.css";
import Inputs from "./inputs";
import Outputs from "./outputs";

const Main = () => {
  // states etc.
  // NOTE - billTotal will hold number entered by user which will be in cents, need to / by 100 for dollars
  const [billTotal, setBillTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  return (
    <div className="main-div">
      <Inputs
        billTotal={billTotal}
        setBillTotal={setBillTotal}
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        numPeople={numPeople}
        setNumPeople={setNumPeople}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <Outputs
        billTotal={billTotal}
        setBillTotal={setBillTotal}
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        numPeople={numPeople}
        setNumPeople={setNumPeople}
        setCustomTip={setCustomTip}
      />
    </div>
  );
};

export default Main;
