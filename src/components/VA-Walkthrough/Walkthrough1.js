import React from "react";
import FloatingInput from "../Shared/FloatingInput";
import WalkthroughFooter from "../Shared/WalkthroughFooter";

const Walkthrough1 = (props) => {
  return (
  <>
    <div className="walkthrough">
      <div className="walkthrough-question">What is your name?</div>
      <div className="walkthrough-answer">
        <FloatingInput
          onChange={props.handleChange}
          placeholder="First Name"
          value={props.fName}
          name="fName"
        />
      </div>
      <div className="walkthrough-answer">
        <FloatingInput
          onChange={props.handleChange}
          placeholder="Last Name"
          value={props.lName}
          name="lName"
        />
      </div>
    </div>
    <WalkthroughFooter
      buttonMod={props.fName.length > 0 && props.lName.length > 0 ? "blue" : ""}
      buttonClick={props.nextStep}
    />
  </>
)};

export default Walkthrough1;
