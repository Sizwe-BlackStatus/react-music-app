import React from "react";
import musicDb from "../musicDb.js";
import SongC from "./SongCard.jsx";
import { SongPage, SongListContainer } from "./SongList.js";

function GenrePlaylist({ music, handlePlaylist, searchPlaylistReset }) {
  const typeOfPlaylist = window.location.pathname.substring(1);
  const playlist = musicDb.filter((song) => song.genre === typeOfPlaylist);
  return (
    <SongPage music={music}>
      <SongListContainer>
        {playlist.map((song, id) => {
          return (
            <SongC
              key={id}
              music={song}
              handlePlaylist={handlePlaylist}
              searchPlaylistReset={searchPlaylistReset}
            />
          );
        })}
      </SongListContainer>
    </SongPage>
  );
}

export default GenrePlaylist;
