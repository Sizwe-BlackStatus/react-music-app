import React from "react";
import { SearchPlaylistContainer } from "./SearchPlaylist.js";
import { ImgContainer, Img, SongName } from "./HamburgerMenu.js";
import { useDispatch } from "react-redux";
import { setCurrentPlaying } from "./actions/actions";

function SearchPlaylist({
  handlePlaylist,
  searchPlaylist,
  playlistOpen,
  mobileMenuOpenToggle,
  mobileMenuOpen,
}) {
  const dispatch = useDispatch();
  function handlePlay(song) {
    dispatch(setCurrentPlaying(song));
  }

  return (
    <SearchPlaylistContainer
      playlistOpen={playlistOpen}
      mobileMenuOpen={mobileMenuOpen}
    >
      {searchPlaylist.map((song, id) => {
        return (
          <ImgContainer
            key={id}
            onClick={() => {
              handlePlaylist();
              handlePlay(song);
            }}
          >
            <Img src={song.image} />
            <SongName>{song.title}</SongName>
          </ImgContainer>
        );
      })}
    </SearchPlaylistContainer>
  );
}

export default SearchPlaylist;
