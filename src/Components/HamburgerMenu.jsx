import React from "react";
import {
  HamburgerMenuContainer,
  HamburgerMenuIcon,
  ImgContainer,
  Img,
  SongName,
} from "./HamburgerMenu";

function HamburgerMenu({ toggle, music }) {
  return (
    <HamburgerMenuContainer className="hamburgerMenuContainer" onClick={toggle}>
      <ImgContainer>
        <Img src={music.image} />
        <SongName>{music.title}</SongName>
      </ImgContainer>
      <HamburgerMenuIcon className="HamburgerIcon" />
    </HamburgerMenuContainer>
  );
}

export default HamburgerMenu;
