import { useState } from "react";

const ClickDiv = (props) => {
  const [collapsed, setCollapsed] = useState(props.collapsed || false);

  return (
    <div className="collapsing-div collapsed click-div">
      <div className="cd-header" onClick={props.onClick}>
        <svg
          className="title-icon"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={props.svgPath} fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {props.title}
      </div>
    </div>
  );
};

export default ClickDiv;
