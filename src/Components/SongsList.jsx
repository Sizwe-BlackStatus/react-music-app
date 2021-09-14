import React from "react";
import { SongListContainer, SongPage } from "./SongList.js";
import SongC from "./SongCard.jsx";
import musicDb from "../musicDb.js";

function SongsList({ music, handlePlaylist}) {
  return (
    <SongPage music={music} >
      <SongListContainer >
        {musicDb.map((song, id) => {
          song.id = id
          return <SongC key={id} music={song} handlePlaylist={handlePlaylist}/>;
        })}
      </SongListContainer>
    </SongPage>
  );
}

export default SongsList;
