import React from "react";
import musicDb from "../musicDb";
import { SongPage, SongListContainer } from "./SongList.js";
import { SongContainer, SongCard, SongImg, SongName } from "./SongCard.js";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Artist({ music }) {
  const artists = musicDb.map((song) => song.artist);
  const filteredDuplicateArtists = musicDb.filter(
    ({ artist }, index) => !artists.includes(artist, index + 1)
  );
  const path = window.location.pathname;
  function NameOfArtist(artist) {
    return artist;
  }
  return (
    <Router>
      <SongPage className="SongPage" music={music}>
        <SongListContainer
          className="SonglistContainer"
          onClick={() => window.location.reload(false)}
        >
          {filteredDuplicateArtists.map((song) => {
            return (
              <Link to={`${path}/${NameOfArtist(song.artist)}`}>
                <SongContainer className={song}>
                  <SongCard>
                    <SongImg src={song.artistImage} alt={song.title} />
                    <SongName>{song.artist}</SongName>
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

export default Artist;
