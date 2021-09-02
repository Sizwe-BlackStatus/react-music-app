import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SongPage, SongListContainer } from "./SongList.js";
import { SongContainer, SongCard, SongImg, SongName } from "./SongCard.js";
import musicDb from "../musicDb";

function Album({music}) {
  const albums = musicDb.map((song) => song.album);
  const filteredDuplicateAlbums = musicDb.filter(
    ({ album }, index) => !albums.includes(album, index + 1)
  );
  const path = window.location.pathname;
  function NameOfAlbum(album) {
    return album;
  }
  return (
    <Router>
      <SongPage music={music}>
        <SongListContainer onClick={() => window.location.reload(false)}>
          {filteredDuplicateAlbums.map((song) => {
            return (
              <Link to={`${path}/${NameOfAlbum(song.album)}`}>
                <SongContainer className={song}>
                  <SongCard>
                    <SongImg src={song.image} alt={song.title} />
                    <SongName>{song.artist}</SongName>
                    <SongName>{song.album}</SongName>
                  </SongCard>
                </SongContainer>
              </Link>
            );
          })}
        </SongListContainer>
      </SongPage>
    </Router>
  );
}

export default Album;
