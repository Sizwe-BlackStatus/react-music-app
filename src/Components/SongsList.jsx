import React from "react";
import { SongListContainer, SongPage } from "./SongList.js";
import SongC from "./SongCard.jsx";
import musicDb from "../musicDb.js";

function SongsList({ music, handlePlaylist, searchPlaylistReset }) {
  return (
    <SongPage music={music}>
      <SongListContainer>
        {musicDb.map((song, id) => {
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

export default SongsList;
