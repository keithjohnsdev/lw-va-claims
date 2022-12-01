import React from 'react'
import FloatingInputDate from '../Shared/FloatingInputDate';
import WalkthroughFooter from '../Shared/WalkthroughFooter';

const Walkthrough2 = (props) => {

    return (
    <>
      <div className="walkthrough">
        <div className="walkthrough-question">What is your date of birth?</div>
        <div className="walkthrough-answer">
        <FloatingInputDate
              placeholder="Select Date of Birth"
              name="dob"
              onChange={props.handleChange}
              value={props.dob}
              type="date"
              min="1900-01-01"
              max="2100-12-31"
            />
        </div>
      </div>
      <WalkthroughFooter
        buttonMod={props.dob.length > 0 ? "blue" : ""}
        buttonClick={props.nextStep}
      />
    </>
  )};

export default Walkthrough2