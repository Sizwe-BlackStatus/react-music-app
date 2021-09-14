import React from "react";
import { Link } from "react-router-dom";
import {
  MobileMenuContainer,
  MobileLibraryHeader,
  MobileHeaderText,
  MobileNavLinks,
  MobileNavItem,
} from "./MobileMenu";
import {
  SongsIcon,
  SideNavIconHeading,
  PlaylistIcon,
  InpuContainer,
  SearchBox,
  Icon,
  Input,
} from "../NavMenu.js";

import SearchPlaylist from "../SearchPlaylist.jsx";

function MobileMenu({ open, toggle, search,handlePlaylist, searchPlaylist, playlistToggle, playlistOpen }) {
  return (
    <MobileMenuContainer className="MobileMenu" open={open} >
      <MobileLibraryHeader className="libraryheader">
        <MobileHeaderText className="headertext">Menu</MobileHeaderText>
      </MobileLibraryHeader>
      <MobileNavLinks className="nav-links" onClick={toggle}>
        <MobileNavItem className="nav-item">
          <Link to="/songs">
            <SongsIcon className="listen-now-icon" />
            <SideNavIconHeading>Songs</SideNavIconHeading>
          </Link>
        </MobileNavItem>
      </MobileNavLinks>
      <MobileLibraryHeader className="MobileLibraryHeader">
        <MobileHeaderText className="headertext">My Playlist</MobileHeaderText>
      </MobileLibraryHeader>
      <MobileNavLinks className="nav-links" onClick={toggle}>
        <MobileNavItem className="nav-item">
          <Link to="/Hip-Hop">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Hip-Hop</SideNavIconHeading>
          </Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/RNB+SOUL">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>SoulNRnb</SideNavIconHeading>
          </Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/Pop">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Pop</SideNavIconHeading>
          </Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/Rock">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Rock</SideNavIconHeading>
          </Link>
        </MobileNavItem>
      </MobileNavLinks>
      {/* <InpuContainer className="inputContainer">
        <SearchBox className="searchbox">
          <Icon />
          <Input placeholder={"Search"} onChange={(e) => search(e.target.value)}/>
        </SearchBox>
      </InpuContainer>
      {searchPlaylist.length !== 0 ? <SearchPlaylist
          searchPlaylist={searchPlaylist}
          handlePlaylist={handlePlaylist}
          playlistToggle={playlistToggle}
          playlistOpen={playlistOpen}
        /> : null} */}
    </MobileMenuContainer>
  );
}

export default MobileMenu;
