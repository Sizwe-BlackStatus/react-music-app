import styled from "styled-components";
import {ImCancelCircle} from "react-icons/im"

export const SearchPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 40%;
  top: 45%;
  width: 350px;
  height: 300px;
  transform: translate(-50%, -50%);
  margin-left: ${({ playlistOpen }) => (playlistOpen ? "-110%" : "147px")};
  background: #000;
  overflow: hidden;
  overflow-y: auto;

  @media screen and (max-width: 560px){
    left:0;
    top:30%;
    width: 100%;
    height: 50vh;
  }
`;

export const CancelSearchPlaylist = styled(ImCancelCircle)`
    position: relative;
    left: 95%;
    color: white;
    cursor: pointer;
`
