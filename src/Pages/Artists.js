import styled from "styled-components";

export const ArtistAlbumScreen = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  background: #000;
  border: 1px solid #282828;
  z-index: 10;
  flex: 0.9;
  position: absolute;
  top: 0;
  left: 200px;
`;

export const ArtistAlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
