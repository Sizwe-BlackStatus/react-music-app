import React from "react";
import { useParams } from "react-router-dom";
import musicDb from "../musicDb";
import { SongPage, SongListContainer} from "../Components/SongList";
import SongC from "../Components/SongCard.jsx";

function AlbumSongs({music}) {
  let { album } = useParams();
  const albumName = musicDb.filter((song) => song.album === album);
  return (
    <SongPage music={music}>
      <SongListContainer>
        {albumName.map((song, id) => (
          <SongC key={song.id} music={song} />
        ))}
      </SongListContainer>
    </SongPage>
  );
}

export default AlbumSongs;
