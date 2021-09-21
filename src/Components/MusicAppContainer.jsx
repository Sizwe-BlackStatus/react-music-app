import React, { useState, useEffect } from "react";
import musicDb from "../musicDb.js";
import NavMenu from "./NavMenu.jsx";
import { MusicContainer } from "./MusicAppContainer";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MusicPlayer from "./MusicPlayer/MusicPlayer.jsx";
import SongsList from "./SongsList.jsx";
import { useSelector } from "react-redux";
import HamburgerMenu from "./HamburgerMenu.jsx";
import GenrePlaylist from "./GenrePlaylist.jsx";

function MusicAppContainer() {
  const [open, setOpen] = useState(false);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [currMusic, setCurrMusic] = useState("");
  const { playing } = useSelector((state) => state.musicReducer);
  const [playliss, setPlayliss] = useState([]);
  const typeOfPlaylist = window.location.pathname.substring(1);
  const [searchPlaylist, setSearchPlaylist] = useState([]);
  const playlist = musicDb.filter((song) => song.genre === typeOfPlaylist);

  function toggle() {
    setOpen(!open);
  }

  function playlistToggle() {
    setPlaylistOpen(!playlistOpen);
  }

  function mobileMenuOpenToggle() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function handlePlaylist() {
    if (typeOfPlaylist !== "songs" || "") {
      setPlayliss(playlist);
    } else {
      setPlayliss(musicDb);
    }
    if (searchPlaylist.length !== 0) {
      setPlayliss(searchPlaylist);
    }
    playliss.map((song, id) => {
      return (song.id = id);
    });
  }

  function searchPlaylistReset() {
    setSearchPlaylist([]);
  }

  useEffect(() => playliss, [playliss]);

  useEffect(() => {
    setCurrMusic(playing);
  }, [playing]);

  function search(searchItem) {
    setSearchPlaylist(
      musicDb.filter((song) => {
        return (
          song.title.toLowerCase().startsWith(searchItem.toLowerCase()) ||
          song.artist.toLowerCase().startsWith(searchItem.toLowerCase()) ||
          song.album.toLowerCase().startsWith(searchItem.toLowerCase())
        );
      })
    );
  }

  return (
    <Router>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuOpenToggle={mobileMenuOpenToggle}
        search={search}
        handlePlaylist={handlePlaylist}
        searchPlaylist={searchPlaylist}
        setSearchPlaylist={setSearchPlaylist}
        playlistToggle={playlistToggle}
        playlistOpen={playlistOpen}
      />
      <HamburgerMenu mobileMenuOpenToggle={mobileMenuOpenToggle} mobileMenuOpen={mobileMenuOpen} music={currMusic} />
      <MusicContainer>
        <NavMenu
          music={currMusic}
          open={open}
          toggle={toggle}
          handlePlaylist={handlePlaylist}
          search={search}
          searchPlaylist={searchPlaylist}
          playlistToggle={playlistToggle}
          playlistOpen={playlistOpen}
          playliss={playliss}
          mobileMenuOpenToggle={mobileMenuOpenToggle}
          mobileMenuOpen={mobileMenuOpen}
        />
        <MusicPlayer
          toggle={toggle}
          playlistToggle={playlistToggle}
          playlistOpen={playlistOpen}
          music={currMusic}
          playliss={playliss}
          handlePlaylist={handlePlaylist}
        />
        <Switch>
          <Route
            path={["/", "/songs"]}
            exact
            component={() => (
              <SongsList
                music={currMusic}
                handlePlaylist={handlePlaylist}
                searchPlaylistReset={searchPlaylistReset}
              />
            )}
          ></Route>
          <Route
            exact
            path="/Hip-Hop"
            component={() => (
              <GenrePlaylist
                music={currMusic}
                handlePlaylist={handlePlaylist}
                searchPlaylistReset={searchPlaylistReset}
              />
            )}
          ></Route>
          <Route
            exact
            path="/RNB+SOUL"
            component={() => (
              <GenrePlaylist
                music={currMusic}
                handlePlaylist={handlePlaylist}
                searchPlaylistReset={searchPlaylistReset}
              />
            )}
          ></Route>
          <Route
            exact
            path="/Pop"
            component={() => (
              <GenrePlaylist
                music={currMusic}
                handlePlaylist={handlePlaylist}
                searchPlaylistReset={searchPlaylistReset}
              />
            )}
          ></Route>
          <Route
            exact
            path="/Rock"
            component={() => (
              <GenrePlaylist
                music={currMusic}
                handlePlaylist={handlePlaylist}
                searchPlaylistReset={searchPlaylistReset}
              />
            )}
          ></Route>
        </Switch>
      </MusicContainer>
    </Router>
  );
}

export default MusicAppContainer;
