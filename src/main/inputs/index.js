import React from "react";
import "./inputs.css";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";

const Inputs = ({
  billTotal,
  setBillTotal,
  tipAmount,
  setTipAmount,
  numPeople,
  setNumPeople,
  customTip,
  setCustomTip,
}) => {
  return (
    <div className="inputs main-subbox">
      <Bill billTotal={billTotal} setBillTotal={setBillTotal} />
      <Tip
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        billTotal={billTotal}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <People numPeople={numPeople} setNumPeople={setNumPeople} />
    </div>
  );
};

export default Inputs;
