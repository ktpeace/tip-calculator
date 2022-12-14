import React from "react";
import "./outputs.css";

const Outputs = ({
  billTotal,
  setBillTotal,
  tipAmount,
  setTipAmount,
  numPeople,
  setNumPeople,
  setCustomTip,
}) => {
  const tipPerPersonHelper = () => {
    let calc = tipAmount / numPeople;
    if (calc === Infinity || !calc) calc = 0;
    return calc.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const tipPerPerson = tipPerPersonHelper();

  const totalPerPersonHelper = () => {
    let calc = (billTotal / 100 + tipAmount) / numPeople;
    if (calc === Infinity || !calc) calc = 0;
    return calc.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const totalPerPerson = totalPerPersonHelper();

  const resetHandler = () => {
    setBillTotal(0);
    setTipAmount(0);
    setNumPeople(1);
    setCustomTip(0);
  };

  return (
    <div className="outputs main-subbox">
      <div className="calculations-container">
        <div className={`tip-amount calculation`}>
          <div className="people-text">
            <h2 className="people-text-header">Tip</h2>
            <h3 className="per-person">/ person</h3>
          </div>
          <div className={`tip-num people-num`}>{tipPerPerson}</div>
        </div>

        <div className={`tip-total calculation`}>
          <div className="people-text">
            <h2 className="people-text-header">Total</h2>
            <h3 className="per-person">/ person</h3>
          </div>
          <div className={`total-num people-num`}>{totalPerPerson}</div>
        </div>
      </div>
      <button onClick={resetHandler} className="reset-button hover">
        Reset
      </button>
    </div>
  );
};

export default Outputs;
