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
    left: 0;
    top: 30%;
    width: 100%;
    height: 50vh;
  }
`;
