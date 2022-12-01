import React from "react";
import FloatingInput from "../Shared/FloatingInput";
import WalkthroughFooter from "../Shared/WalkthroughFooter";

const Walkthrough4 = (props) => {
  return (
    <>
      <div className="walkthrough">
        <div className="walkthrough-question" style={{ borderBottom: "none" }}>
          Please select all your current and former health insurance plans.
        </div>
        <div className="select-insurance">
          <div className="insurance-row">
            <div className="insurance-box">
              <img src={require("../../theme/assets/logo-tricare.png")} />
            </div>
            <div className="insurance-box">
              <img src={require("../../theme/assets/logo-tricare.png")} />
            </div>
          </div>
          <div className="insurance-row">
            <div className="insurance-box">
              <img src={require("../../theme/assets/logo-tricare.png")} />
            </div>
            <div className="insurance-box">
              <img src={require("../../theme/assets/logo-tricare.png")} />
            </div>
          </div>
          <div className="insurance-row">
            <div className="insurance-box">
              <img src={require("../../theme/assets/logo-tricare.png")} />
            </div>
            <div className="insurance-box">
              <img src={require("../../theme/assets/logo-tricare.png")} />
            </div>
          </div>
        </div>
      </div>
      <WalkthroughFooter
        buttonMod={props.healthIns.length > 0 ? "blue" : ""}
        buttonClick={props.nextStep}
      />
    </>
  );
};

export default Walkthrough4;
