import React from "react";

const Bill = () => {
  return <div>Bill</div>;
};

const Tip = () => {
  return <div>Select Tip % 5% 10% 15% 25% 50% Custom</div>;
};

const People = () => {
  return <div>Number of People</div>;
};

const Inputs = () => {
  return (
    <div>
      <Bill></Bill>
      <Tip></Tip>
      <People></People>

      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
};

export default Inputs;
