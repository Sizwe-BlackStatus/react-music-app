import React from "react";
import {
  MenuNav,
  InpuContainer,
  Input,
  Icon,
  NavLinks,
  SongsIcon,
  NavItem,
  LibraryHeader,
  HeaderText,
  MicrophoneIcon,
  AlbumIcon,
  SearchBox,
  SideNavIconHeading,
  PlaylistIcon,
} from "./NavMenu";

import { Link } from "react-router-dom";
import LogoComponent from "./LogoContainer.jsx";
import SongScreen from "./SongScreen.jsx";

function NavMenu({ music, open, toggle }) {
  return (
    <MenuNav className="MenuNav">
      <LogoComponent />
      <InpuContainer className="inputContainer">
        <SearchBox className="searchbox">
          <Icon />
          <Input placeholder={"Search"} />
        </SearchBox>
      </InpuContainer>
      <LibraryHeader className="libraryheader">
        <HeaderText className="headertext">Menu</HeaderText>
      </LibraryHeader>
      <NavLinks className="nav-links">
        <NavItem className="nav-item">
          <Link to="/songs">
            <SongsIcon className="listen-now-icon" />
            <SideNavIconHeading>Songs</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link to="/artists">
            <MicrophoneIcon className="listen-now-icon" />
            <SideNavIconHeading>Artists</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link to="/albums">
            <AlbumIcon className="listen-now-icon" />
            <SideNavIconHeading>Albums</SideNavIconHeading>
          </Link>
        </NavItem>
      </NavLinks>
      <LibraryHeader className="libraryheader">
        <HeaderText className="headertext">Genres</HeaderText>
      </LibraryHeader>
      <NavLinks className="nav-links">
        <NavItem className="nav-item">
          <Link to="/Hip-Hop">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Hip-Hop</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/RNB+SOUL">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>SoulNRnb</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Pop">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Pop</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Rock">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Rock</SideNavIconHeading>
          </Link>
        </NavItem>
      </NavLinks>
      <SongScreen music={music} open={open} toggle={toggle} />
    </MenuNav>
  );
}

export default NavMenu;
