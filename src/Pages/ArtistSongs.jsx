import React, { useEffect, useState } from "react";
import musicDb from "../musicDb";
import { ArtistSongsContainer } from "./ArtistSongs.js";
import { useSelector, useDispatch } from "react-redux";
import SongC, { SongCard } from "../Components/SongCard.jsx";
import { SongListContainer, SongPage } from "../Components/SongList.js";
import {setGenre, setPlaylist} from "../Components/actions/actions"
import { useHistory ,useLocation, useParams } from 'react-router-dom';

function ArtistSongs({music}) {
  const [tracks, setTracks] = useState([]);
  const [trackImage, setTrackImage] = useState([]);
  const typeOfPlaylist = window.location.pathname.substring(1)
  const { playlists, genre } = useSelector((state) => state.musicReducer);
  const {path} = useSelector((state) => state.musicReducer)
  const genres = playlists.filter((song) => song.genre === path);
  
const location = useLocation()
  const dispatch = useDispatch();
  function setGenrePlaylist() {
    dispatch(setPlaylist(genres));
  }
  let {artist} = useParams()
  const artistName = musicDb.filter((song) => song.artist === artist);

  return (
    <SongPage className="SongPage" music={music}>
      {console.log(artist)}
      <SongListContainer className="SongListContainer">
        {artistName.map(
          (song, id) =>
          <SongC key={song.id} music={song} />
        )}
      </SongListContainer>
    </SongPage>
  );
}

export default ArtistSongs;
