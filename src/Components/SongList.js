import styled from "styled-components";

export const SongPage = styled.div`
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  background: #000;
  border: 1px solid #282828;
  flex: 0.9;
  position: absolute;
  top: 54px;
  width: 100%;
  @media screen and (max-width: 560px) {
    position: absolute;
    top: 54px;
    width: 100%;
  }
`;

export const SongListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 197px;
  a:link {
    text-decoration: none;
  }
  @media screen and (max-width: 560px) {
    margin-left: 0px;
  }
`;
