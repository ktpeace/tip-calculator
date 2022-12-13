import React from "react";
import "./inputs.css";

const Bill = ({ billTotal, setBillTotal }) => {
  // POSSIBLE TO-DO - LIMIT MAX AMOUNT USERS CAN ENTER
  // if we listen for key presses event.key will have the value of whatever key the user pressed
  // we will build our amount with each new number the user adds being pushed onto the right hand side
  const handleBillKeyDown = (event) => {
    let firstVal = /[1-9]/;
    let nextVal = /[0-9]/;

    // if amount is currently 0, then we only want to accept 1-9
    // test againt the firstVal regExp and if passes, set amount to the number parsed from the string
    if (billTotal === 0 && firstVal.test(event.key)) {
      setBillTotal(parseInt(event.key));
    }
    // if amount is more than 0, we can accept any digit 0-9
    // parse the number from the string & then multiply amount by 10 and add the new number to put it as the last digit
    else if (nextVal.test(event.key)) {
      setBillTotal((prevAmount) => {
        return prevAmount * 10 + parseInt(event.key);
      });
    }

    // if key press was backspace we need to remove the last digit
    // divide previous amount by 10 to move decimal back one place, then floor to drop the decimal off the end
    else if (event.key === "Backspace") {
      setBillTotal((prevAmount) => {
        return Math.floor(prevAmount / 10);
      });
    }
  };

  // dummy change handler to prevent React warning of controlled input not having change handler
  const billChangeHandler = () => {};

  // we need to show billTotal string divided by 100 for dollars/cents & without $
  const valueString = (billTotal / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const valueWithoutSymbol = valueString.slice(1);

  return (
    <div className="bill-div">
      <h2 className="bill-label">Bill</h2>
      <div className="bill-input-div input-div hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
          <path
            fill="#9EBBBD"
            d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
          />
        </svg>
        <input
          type="text"
          placeholder="0.00"
          value={valueWithoutSymbol}
          onKeyDown={handleBillKeyDown}
          onChange={billChangeHandler}
          className="input-field hover"
        />
      </div>
    </div>
  );
};

const Tip = ({
  tipAmount,
  setTipAmount,
  billTotal,
  customTip,
  setCustomTip,
}) => {
  const tipList = [5, 10, 15, 25, 50];

  // custom tip will always be user input in cents, need to divide by 100 to get dollars for use

  // if we listen for key presses event.key will have the value of whatever key the user pressed
  // we will build our amount with each new number the user adds being pushed onto the right hand side
  const handleCustomTipKeyDown = (event) => {
    let firstVal = /[1-9]/;
    let nextVal = /[0-9]/;

    // if amount is currently 0, then we only want to accept 1-9
    // test againt the firstVal regExp and if passes, set amount to the number parsed from the string
    if (customTip === 0 && firstVal.test(event.key)) {
      let incomingNum = parseInt(event.key);
      setCustomTip(incomingNum);
      setTipAmount(() => incomingNum / 100);
    }
    // if amount is more than 0, we can accept any digit 0-9
    // parse the number from the string & then multiply amount by 10 and add the new number to put it as the last digit
    else if (nextVal.test(event.key)) {
      let newNum = customTip * 10 + parseInt(event.key);
      setCustomTip(newNum);
      setTipAmount(newNum / 100);
    }

    // if key press was backspace we need to remove the last digit
    // divide previous amount by 10 to move decimal back one place, then floor to drop the decimal off the end
    else if (event.key === "Backspace") {
      let newNum = Math.floor(customTip / 10);
      setCustomTip(newNum);
      setTipAmount(newNum / 100);
    }
  };

  // dummy change handler to prevent React warning of controlled input not having change handler
  const customTipChangeHandler = () => {};

  // update tipAmount, set customTip back to 0
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
        })
        .slice(1);
    }
  };

  const valueWithoutSymbol = valueStringHelper();

  return (
    <div className="tip-div">
      <h2 className="tip-label">Select Tip %</h2>
      <div className="tip-selection-div">
        {tipList.map((num) => {
          // if button value corresponds to currently active tipAmount this variable will be true (used for applying active class below)
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
          className="tip-input hover"
        />
      </div>
    </div>
  );
};

const People = ({ numPeople, setNumPeople }) => {
  // if we listen for key presses event.key will have the value of whatever key the user pressed
  // we will build our amount with each new number the user adds being pushed onto the right hand side
  const handlePeopleKeyDown = (event) => {
    let firstVal = /[1-9]/;
    let nextVal = /[0-9]/;

    // if amount is currently 0, then we only want to accept 1-9
    // test againt the firstVal regExp and if passes, set amount to the number parsed from the string
    if (numPeople === 0 && firstVal.test(event.key)) {
      let incomingNum = parseInt(event.key);
      setNumPeople(incomingNum);
    }
    // if amount is more than 0, we can accept any digit 0-9
    // parse the number from the string & then multiply amount by 10 and add the new number to put it as the last digit
    else if (nextVal.test(event.key)) {
      let newNum = numPeople * 10 + parseInt(event.key);
      setNumPeople(newNum);
    }

    // if key press was backspace we need to remove the last digit
    // divide previous amount by 10 to move decimal back one place, then floor to drop the decimal off the end
    else if (event.key === "Backspace") {
      let newNum = Math.floor(numPeople / 10);
      setNumPeople(newNum);
    }
  };

  // dummy change handler to prevent React warning of controlled input not having change handler
  const peopleChangeHandler = () => {};
  const isPeopleZero = numPeople === 0;
  return (
    <div className="people-div">
      <div className="people-div-text">
        <h2 className="people-label">Number of People</h2>
        {isPeopleZero ? (
          <span className="zero-warning">Can't be zero</span>
        ) : (
          <span></span>
        )}
      </div>
      <div
        className={`people-input-div input-div hover ${
          isPeopleZero && "people-zero"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
          <path
            fill="#9EBBBD"
            d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="0"
          value={numPeople}
          onKeyDown={handlePeopleKeyDown}
          onChange={peopleChangeHandler}
          className="input-field hover"
        />
      </div>
    </div>
  );
};

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
