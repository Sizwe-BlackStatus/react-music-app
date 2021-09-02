import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SongListContainer, SongPage } from "./SongList.js";
import SongC from "./SongCard.jsx";
import { setPlaylist } from "../Components/actions/actions";

function SongsList({ music }) {
  const { playlists } = useSelector((state) => state.musicReducer);
  const { path } = useSelector((state) => state.musicReducer);
  // const dispatch = useDispatch();
  // function setGenrePlaylist() {
  //   dispatch(setPlaylist(playlists));
  // }
 

  return (
    <SongPage className="bb" music={music} >
      <SongListContainer>
        {console.log(playlists)}
        {playlists.map((song, id) => {
          return <SongC key={song.id} music={song} />;
        })}
      </SongListContainer>
    </SongPage>
  );
}

export default SongsList;
