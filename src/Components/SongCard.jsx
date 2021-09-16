import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPlaying } from "./actions/actions";
import { SongContainer, SongImg, SongName, SongCard } from "./SongCard";

function SongC({ music, handlePlaylist, searchPlaylistReset }) {
  const dispatch = useDispatch();
  function handlePlay() {
    dispatch(setCurrentPlaying(music));
  }

  return (
    <SongContainer>
      <SongCard
        onClick={() => {
          handlePlaylist();
          handlePlay();
          searchPlaylistReset();
        }}
      >
        <SongImg src={music.image} />
        <SongName>{music.title}</SongName>
        <SongName>{music.artist}</SongName>
      </SongCard>
    </SongContainer>
  );
}

export default SongC;
