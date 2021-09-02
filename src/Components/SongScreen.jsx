import React, { useState, useRef, useEffect } from "react";

import {
  SongScreenContainer,
  SongImgContainer,
  SongImg
} from "./SongScreen";

import {SongName} from "./SongCard.js"

function SongScreen({ open, music, toggle }) {
  return (
    <SongScreenContainer open={open} className="SongScreen" toggle={toggle} music={music}>
      {console.log(music)}
      <SongImgContainer>
        <SongImg
          src={music.image}
          alt={music.title}
        />
        <SongName>{music.title}</SongName>
        <SongName>{music.artist}</SongName>
      </SongImgContainer>
    </SongScreenContainer>
  );
}

export default SongScreen;
