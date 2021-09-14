import React from "react";
import { Link } from "react-router-dom";
import { LogoContainer, Logo, WaveIcon, WaveHeading } from "./LogoContainer";

function LogoComponent() {
  return (
    <LogoContainer className="logocontainer">
      <Link to='/'>
        <Logo className="logo">
          <WaveIcon className="waveicon" />
          <WaveHeading className="waveheading">Wave</WaveHeading>
        </Logo>
      </Link>
    </LogoContainer>
  );
}

export default LogoComponent;
