import React, { useState, useEffect, useRef } from "react";
import NavMenu from "./NavMenu.jsx";
import { MusicContainer } from "./MusicAppContainer";
import AlbumSongs from "../Pages/AlbumSongs";
import ArtistSongs from "../Pages/ArtistSongs.jsx";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import MusicPlayer from "./MusicPlayer/MusicPlayer.jsx";
import SongsList from "./SongsList.jsx";
import { useSelector } from "react-redux";
import Artist from "./Artist.jsx";
import Album from "./Album.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import Playlist from "./Playlist.jsx";

function MusicAppContainer() {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }
  const [currMusic, setCurrMusic] = useState("");
  const [page, setCurrPage] = useState(0);
  useEffect(() => {
    setCurrPage(path);
  }, [page]);
  const { playing } = useSelector((state) => state.musicReducer);
  useEffect(() => {
    setCurrMusic(playing);
  }, [playing]);

  const { path } = useRouteMatch();

  return (
    <Router>
      <MobileMenu open={open} toggle={toggle} top={open ? "0" : "-110%"} />
      <HamburgerMenu toggle={toggle} music={currMusic} />
      <MusicContainer>
        <NavMenu music={currMusic} open={open} toggle={toggle} />
        <MusicPlayer toggle={toggle} music={currMusic} />
        <Switch>
          <Route
            path="/songs"
            exact
            component={() => <SongsList music={currMusic} />}
          ></Route>
          <Route
            path="/artists"
            exact
            component={() => <Artist music={currMusic} />}
          ></Route>
          <Route
            path={"/artists/:artist"}
            component={() => <ArtistSongs music={currMusic} />}
          ></Route>
          <Route
            exact
            path="/albums"
            component={() => <Album music={currMusic} />}
          ></Route>
          <Route
            exact
            path="/albums/:album"
            component={() => <AlbumSongs music={currMusic} />}
          ></Route>
          <Route
            exact
            path="/Hip-Hop"
            component={() => <Playlist music={currMusic} />}
          ></Route>
          <Route
            exact
            path="/RNB+SOUL"
            component={() => <Playlist music={currMusic} />}
          ></Route>
          <Route
            exact
            path="/Pop"
            component={() => <Playlist music={currMusic} />}
          ></Route>
          <Route
            exact
            path="/Rock"
            component={() => <Playlist music={currMusic} />}
          ></Route>
        </Switch>
      </MusicContainer>
    </Router>
  );
}

export default MusicAppContainer;
