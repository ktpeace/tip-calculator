import React from "react";
import "./outputs.css";

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
      <div className="tip-amount calculation">
        <div className="people-text">
          <h2 className="people-text-header">Tip</h2>
          <h3 className="per-person">/ person</h3>
        </div>
        <div className="tip-num people-num">$0.00</div>
      </div>
      <div className="tip-total calculation">
        <div className="people-text">
          <h2 className="people-text-header">Total</h2>
          <h3 className="per-person">/ person</h3>
        </div>
        <div className="total-num people-num">$0.00</div>
      </div>
      <button>Reset</button>
    </div>
  );
};

export default Outputs;
