import React from "react";
import musicDb from "../musicDb.js";
import SongC from "./SongCard.jsx";
import { SongPage, SongListContainer } from "./SongList.js";

function Playlist({music}) {
  const typeOfPlaylist = window.location.pathname.substring(1);
  const playlist = musicDb.filter((song) => song.genre === typeOfPlaylist);
  return (
    <SongPage music={music}>
      <SongListContainer>
        {playlist.map((song) => {
          return <SongC key={song.id} music={song} />;
        })}
      </SongListContainer>
    </SongPage>
  );
}

export default Playlist;
