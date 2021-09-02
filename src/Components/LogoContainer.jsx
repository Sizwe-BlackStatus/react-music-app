import React from "react";
import { LogoContainer, Logo, WaveIcon, WaveHeading } from "./LogoContainer";

function LogoComponent() {
  return (
    <LogoContainer className="logocontainer">
        <Logo className="logo">
          <WaveIcon className="waveicon" />
          <WaveHeading className="waveheading">Wave</WaveHeading>
        </Logo>
    </LogoContainer>
  );
}

export default LogoComponent;
