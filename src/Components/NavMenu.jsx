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
  SearchBox,
  SideNavIconHeading,
  PlaylistIcon,
} from "./NavMenu";

import { Link } from "react-router-dom";
import LogoComponent from "./LogoContainer.jsx";
import SongScreen from "./SongScreen.jsx";
import SearchPlaylist from "./SearchPlaylist.jsx";

function NavMenu({ music, open, toggle, handlePlaylist, search, searchPlaylist, playlistToggle, playlistOpen }) {
  return (
    <MenuNav className="MenuNav">
      <LogoComponent onClick={handlePlaylist} />
      <InpuContainer className="inputContainer">
        <SearchBox className="searchbox">
          <Icon />
          <Input placeholder={"Search"} onChange={(e) => search(e.target.value)}/>
        </SearchBox>
      </InpuContainer>
      <LibraryHeader className="libraryheader">
        <HeaderText className="headertext">Menu</HeaderText>
      </LibraryHeader>
      <NavLinks className="nav-links">
        <NavItem className="nav-item" onClick={handlePlaylist}>
          <Link to="/songs">
            <SongsIcon className="listen-now-icon" />
            <SideNavIconHeading>Songs</SideNavIconHeading>
          </Link>
        </NavItem>
      </NavLinks>
      <LibraryHeader className="libraryheader">
        <HeaderText className="headertext">Genres</HeaderText>
      </LibraryHeader>
      <NavLinks className="nav-links">
        <NavItem className="nav-item" onClick={handlePlaylist}>
          <Link to="/Hip-Hop">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Hip-Hop</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem onClick={handlePlaylist}>
          <Link to="/RNB+SOUL">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>SoulNRnb</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem onClick={handlePlaylist}>
          <Link to="/Pop">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Pop</SideNavIconHeading>
          </Link>
        </NavItem>
        <NavItem onClick={handlePlaylist}>
          <Link to="/Rock">
            <PlaylistIcon className="listen-now-icon" />
            <SideNavIconHeading>Rock</SideNavIconHeading>
          </Link>
        </NavItem>
      </NavLinks>
      <SongScreen music={music} open={open} toggle={toggle} />
      {searchPlaylist.length !== 0 ? <SearchPlaylist
          searchPlaylist={searchPlaylist}
          handlePlaylist={handlePlaylist}
          playlistToggle={playlistToggle}
          playlistOpen={playlistOpen}
        /> : null}
    </MenuNav>
  );
}

export default NavMenu;
