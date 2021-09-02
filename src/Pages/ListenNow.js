import styled from "styled-components";

export const SongScreen = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  background: #000;
  border: 1px solid #282828;
  z-index: 10;
  flex: 0.9;
  position: absolute;
    top: 54px;
    left: 197px;
`;
export const SongListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 227px;
  padding: 1rem;
  margin-top: 34px;
  background: rgb(15 17 28);
  border-radius: 8px;

  :hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export const SongCard = styled.div`
  height: 220px;
`;

export const SongImg = styled.img`
  height: 170px;
  border-radius: 8px;
  width: 100%;
  object-fit: contain;
`;

export const SongName = styled.div`
  margin-top: 5px;
  color: #f9f9f9;
  position: relative;
  left: 11px;
`;
