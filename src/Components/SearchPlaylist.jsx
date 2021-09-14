import React from "react";
import { SearchPlaylistContainer } from "./SearchPlaylist.js";
import { ImgContainer, Img, SongName } from "./HamburgerMenu.js";
import { useDispatch } from "react-redux";
import { setCurrentPlaying } from "./actions/actions";

function SearchPlaylist({ handlePlaylist, searchPlaylist, playlistOpen }) {
  const dispatch = useDispatch();
  function handlePlay(song) {
    dispatch(setCurrentPlaying(song));
  }

  return (
      <SearchPlaylistContainer playlistOpen={playlistOpen}>
        {searchPlaylist.map((song, id) => {
          song.id = id;
          return (
            <ImgContainer onClick={() => {handlePlaylist(); handlePlay(song);}}>
              <Img src={song.image} />
              <SongName>{song.title}</SongName>
            </ImgContainer>
          );
        })}
      </SearchPlaylistContainer>
  );
}

export default SearchPlaylist;
