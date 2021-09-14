import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMusicPlayerFill } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
import { IoRadio, IoAlbumsOutline } from "react-icons/io5";
import { WiTime9 } from "react-icons/wi";
import { GiMicrophone } from "react-icons/gi";
import { MdPlaylistPlay } from "react-icons/md";

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgb(15 17 28);
  height: 100vh;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 256px;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const InpuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-top: 20px;
  width: 77%;
  line-height: 22px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  background: #fff;
  @media screen and (max-width: 560px) {
    position: absolute;
    bottom: 100px;
    margin-left: 36px;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  position: relative;
  width: 81%;
  opacity: 0.5;
`;

export const LibrarySection = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;
export const Icon = styled(AiOutlineSearch)`
  position: relative;
  margin-left: 6px;
  margin-right: 6px;
  opacity: 0.7;
`;
export const SongsIcon = styled(BsMusicPlayerFill)`
  position: relative;
  top: 5px;
  color: #f9f9f9;
  opacity: 0.9;
  width: 40px;
  font-size: 19px;
  background-color: transparent;
`;
export const BrowseIcon = styled(FiGrid)`
  position: relative;
  top: 5px;
  color: #fa233b;
  width: 40px;
  font-size: 19px;
`;
export const RadioIcon = styled(IoRadio)`
  position: relative;
  top: 5px;
  color: #fa233b;
  width: 40px;
  font-size: 19px;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 20px;
  width: 78%;
  margin-left: 14px;
  list-style-type: none;
  cursor: pointer;
`;
export const NavItem = styled.li`
  display: flex;
  font-size: 15px;
  height: 32px;
  margin-bottom: 2px;
  padding: 4px;
  text-align: left;
  line-height: 22px;
  a:link {
    display: flex;
    text-decoration: none;
    color: black;
  }
  :hover {
    background: #141725;
    height: 33px;
    border-radius: 3px;
    border: 1px solid #2c2c2c;
    width: 100%;
  }
`;

export const LibraryContainer = styled.div`
  display: block;
  position: relative;
  top: 14px;
  height: 168px;
`;
export const LibraryHeader = styled.div`
  display: flex;
  position: relative;
  width: 196px;
  left: 22px;
  margin-top: 37px;
`;

export const HeaderText = styled.h1`
  color: #f3f3f3;
  width: 163px;
  height: 12.9px;
  font-size: 18px;
  opacity: 0.5;
`;
export const Content = styled.ul`
  height: 134px;
  list-style-type: none;
  position: relative;
  left: 14px;
  width: 94%;
`;

export const ContentItem = styled.li`
  font-size: 15px;
  height: 32px;
  margin-bottom: 2px;
  padding: 4px;
  text-align: left;
  line-height: 22px;
  letter-spacing: 0.7px;
`;

export const RecentlyAddedIcon = styled(WiTime9)`
  position: relative;
  top: 5px;
  color: #fa233b;
  width: 40px;
  font-size: 19px;
`;

export const MicrophoneIcon = styled(GiMicrophone)`
  position: relative;
  top: 5px;
  color: #f9f9f9;
  opacity: 0.9;
  width: 40px;
  font-size: 19px;
  background-color: transparent;
`;

export const AlbumIcon = styled(IoAlbumsOutline)`
  position: relative;
  top: 5px;
  color: #f9f9f9;
  opacity: 0.9;
  width: 40px;
  font-size: 19px;
  background-color: transparent;
`;

export const PlaylistIcon = styled(MdPlaylistPlay)`
  position: relative;
  top: 5px;
  color: #f9f9f9;
  opacity: 0.9;
  width: 40px;
  font-size: 19px;
  background-color: transparent;
`;

export const SideNavIconHeading = styled.p`
  position: relative;
  top: 5px;
  font-size: 17px;
  color: #f9f9f9;
  opacity: 0.9;
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;
