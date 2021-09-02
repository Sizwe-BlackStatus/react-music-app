import React from "react";
import { ToggleContainer, ToggleButton, ToggleIcon } from "./Toggle.js";

function ToggleComponent({toggle}) {
  return (
    <ToggleContainer className="Toggle" onClick={toggle}>
      <ToggleButton className="ToggleButton" >
        <ToggleIcon className="ToggleIcon" />
      </ToggleButton>
    </ToggleContainer>
  );
}

export default ToggleComponent;
