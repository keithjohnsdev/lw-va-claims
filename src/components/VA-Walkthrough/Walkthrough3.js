import React from "react";
import FloatingInput from "../Shared/FloatingInput";
import WalkthroughFooter from "../Shared/WalkthroughFooter";
import { useState } from "react";

const Walkthrough3 = (props) => {
  return (
    <>
      <div className="walkthrough">
        <div className="walkthrough-question">
          What is your Social Security number?
          <p className="blue-link">Why do you need my social security?</p>
        </div>

        <div className="walkthrough-answer">
          <FloatingInput
            onChange={props.handleChange}
            placeholder="Enter SSN No."
            value={props.ssn}
            name="ssn"
          />
        </div>
      </div>
      <WalkthroughFooter
        buttonMod={props.ssn.length > 0 ? "blue" : ""}
        buttonClick={props.nextStep}
      />
    </>
  );
};

export default Walkthrough3;
