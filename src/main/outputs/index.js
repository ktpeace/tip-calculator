import React from "react";
import "./outputs.css";

function CalculationDiv(outerDivClass, amountClass) {
  return (
    <div className={`${outerDivClass} calculation`}>
      <div className="people-text">
        <h2 className="people-text-header">Tip</h2>
        <h3 className="per-person">/ person</h3>
      </div>
      <div className={`${amountClass} people-num`}>$0.00</div>
    </div>
  );
}

const Outputs = ({
  billTotal,
  setBillTotal,
  tipAmount,
  setTipAmount,
  numPeople,
  setNumPeople,
}) => {
  // TODO: ADD LOGIC FOR AMOUNTS & RESET
  return (
    <div className="outputs main-subbox">
      <CalculationDiv outerDivClass={"tip-amount"} amountClass={"tip-num"} />
      <CalculationDiv outerDivClass={"tip-total"} amountClass={"people-num"} />
      <button>Reset</button>
    </div>
  );
};

export default Outputs;
