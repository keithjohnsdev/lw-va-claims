import React from "react";
import { WalkthroughButton } from "./Buttons";
import { Container3 } from "./Containers";

const WalkthroughFooter = (props) => {
  return (
    <div className="wt-footer">
      <Container3>
        <WalkthroughButton mod={props.buttonMod} onClick={props.buttonClick}>
          Continue
        </WalkthroughButton>
      </Container3>
    </div>
  );
};

export default WalkthroughFooter;
