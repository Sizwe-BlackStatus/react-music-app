import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPlaying } from "./actions/actions";
import { SongContainer, SongImg, SongName, SongCard } from "./SongCard";

function SongC({ music, path }) {
  const dispatch = useDispatch();
  function handlePlay() {
    dispatch(setCurrentPlaying(music));
  }
  function disableScrolling(e){
    e.preventDefault()
}

  return (
    <SongContainer>
      <SongCard onClick={handlePlay} className="villain">
        <SongImg src={music.image} />
        <SongName>{music.title}</SongName>
        <SongName>{music.artist}</SongName>
      </SongCard>
    </SongContainer>
  );
}

export default SongC;
