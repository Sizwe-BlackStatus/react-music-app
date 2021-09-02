import React from "react";
import { ArtistAlbumScreen, ArtistAlbumContainer } from "./Artists.js";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Artist from "../Components/Artist.jsx";
import musicDb from "../musicDb.js";
import { useState } from "react";
import MusicPlayer from "../Components/MusicPlayer/MusicPlayer.jsx";
import {SongPage, SongListContainer}from "../Components/SongList.js";
import AlbumSongs from "./AlbumSongs.jsx";

function Artists(
  {open,
    toggle,
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    volume,
    handleVolumeChange,
    mute,
    handleMute,
    setCurrentSongIndex,
    currentSongIndex,
    skipTrack,
    previousTrack,
    repeat,
    repeatTrack,
    shuffleTrack,
    audioEl,
    setSongId,
    songs,setSongs, genre3}
) {
  // const [songs] = useState(musicDb);
  
  // console.log(songs)
  return (
    /* {filteredDuplicateArtists.map((artist) => {
          return <Link to="Artisi"><button>{artist.artist}</button></Link>
      })} */
      <Router>
        <SongPage>
        <SongListContainer>
          <Link to="/if">
            <button>Hello</button>
          </Link>
          <Switch>
            <Route path="/if" >
              <AlbumSongs />
            </Route>
          </Switch>
        </SongListContainer>
      </SongPage>
      </Router>
      
      
      
    // <Link to="/Genre">
    //   <ArtistAlbumScreen>
    //     <Artist
    //       genre3={genre3}
    //       songs={songs}
    //       setSongs={setSongs}
    //       audioEl={audioEl}
    //       setSongId={setSongId}
    //       currentSongIndex={currentSongIndex}
    //       currentTrack={currentTrack}
    //       setCurrentTrack={setCurrentTrack}
    //       isPlaying={isPlaying}
    //       setIsPlaying={setIsPlaying}
    //       volume={volume}
    //       handleVolumeChange={handleVolumeChange}
    //       mute={mute}
    //       handleMute={handleMute}
    //       setCurrentSongIndex={setCurrentSongIndex}
    //       skipTrack={skipTrack}
    //       previousTrack={previousTrack}
    //       repeat={repeat}
    //       repeatTrack={repeatTrack}
    //       shuffleTrack={shuffleTrack}
    //     />
    //   </ArtistAlbumScreen>
    // </Link>
  );
}

export default Artists;
