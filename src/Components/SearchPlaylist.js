import styled from "styled-components";

export const SearchPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 40%;
  top: 67%;
  width: 350px;
  height: 80%;
  transform: translate(-50%, -50%);
  margin-left: ${({ playlistOpen }) => (playlistOpen ? "-110%" : "147px")};
  background: #000;
  overflow: hidden;
  overflow-y: auto;

  @media screen and (max-width: 560px) {
    left: 15%;
    top: 50%;
    width: 74%;
    height: 50vh;
    z-index: 100;
  }
  @media screen and (max-width: 400px) {
    left: 7%;
  }
`;

export const CancelSearchPlaylistBox = styled.div`
  display: none;
  @media screen and (max-width: 560px){
    display: block;
    position: relative;
    left: 93%;
  }
`;

