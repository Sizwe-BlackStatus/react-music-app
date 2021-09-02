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
  MicrophoneIcon,
  AlbumIcon,
  PlaylistIcon,
} from "../NavMenu.js";
function MobileMenu({ open, toggle }) {
  return (
    <MobileMenuContainer className="MobileMenu" open={open} onClick={toggle}>
      <MobileLibraryHeader className="libraryheader">
        <MobileHeaderText className="headertext">Menu</MobileHeaderText>
      </MobileLibraryHeader>
      <MobileNavLinks className="nav-links">
        <MobileNavItem className="nav-item">
          <Link to="/songs">
            <SongsIcon className="listen-now-icon" />
            <SideNavIconHeading>Songs</SideNavIconHeading>
          </Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/artists">
            <MicrophoneIcon className="listen-now-icon" />
            <SideNavIconHeading>Artist</SideNavIconHeading>
          </Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/albums">
            <AlbumIcon className="Album-icon" />
            <SideNavIconHeading>Albums</SideNavIconHeading>
          </Link>
        </MobileNavItem>
      </MobileNavLinks>
      <MobileLibraryHeader className="MobileLibraryHeader">
        <MobileHeaderText className="headertext">My Playlist</MobileHeaderText>
      </MobileLibraryHeader>
      <MobileNavLinks className="nav-links">
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
    </MobileMenuContainer>
  );
}

export default MobileMenu;
