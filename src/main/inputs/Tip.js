import React from "react";

const Tip = ({
    tipAmount,
    setTipAmount,
    billTotal,
    customTip,
    setCustomTip,
  }) => {
    const tipList = [5, 10, 15, 25, 50];

    // handle key presses for input field - always add and remove numbers from right hand side
    const handleCustomTipKeyDown = (event) => {
      let firstVal = /[1-9]/;
      let nextVal = /[0-9]/;

      let value = customTip;

      // if amount is currently 0, then we only want to accept 1-9
      if (customTip === 0 && firstVal.test(event.key)) {
        value = parseInt(event.key);
      }

      // if amount is more than 0, we can accept any digit 0-9
      // only allow adding if custom tip is 4 digits or less (no more than 5 digit tips)
      else if (nextVal.test(event.key) && customTip.toString().length <= 4) {
        value = customTip * 10 + parseInt(event.key);
      }

      // if key press was backspace we need to remove the last digit
      else if (event.key === "Backspace") {
        value = Math.floor(customTip / 10);
      }

      setCustomTip(value);
      setTipAmount(value / 100);
    };

    // dummy change handler to prevent React warning of controlled input not having change handler
    const customTipChangeHandler = () => {};

    // hand tip button clicks - update tipAmount, set customTip back to 0
    const onTipButtonClick = (event) => {
      const percent = event.target.value / 100;
      const tip = (billTotal / 100) * percent;
      setTipAmount(tip);
      setCustomTip(0);
    };

    // we need to show customTip string divided by 100 for dollars/cents & without $
    const valueStringHelper = () => {
      if (customTip === 0) {
        return "";
      } else {
        return (customTip / 100)
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
      }
    };
    const valueWithoutSymbol = valueStringHelper();

    return (
      <div className="tip-div">
        <h2 className="tip-label">Select Tip %</h2>
        <div className="tip-selection-div">
          {tipList.map((num) => {
            // if button value corresponds to active tipAmount will be true (used for applying active class)
            let activeAmount =
              Number(billTotal) !== 0 &&
              (billTotal / 100) * (num / 100) === tipAmount;

            return (
              <button
                className={`tip-button hover ${activeAmount && "button-active"}`}
                key={`tip-${num}`}
                value={num}
                onClick={onTipButtonClick}
              >
                {`${num}%`}
              </button>
            );
          })}
          <input
            type="text"
            placeholder="Custom"
            value={valueWithoutSymbol}
            onChange={customTipChangeHandler}
            onKeyDown={handleCustomTipKeyDown}
            className="tip-input"
          />
        </div>
      </div>
    );
  };

export default Tip;
