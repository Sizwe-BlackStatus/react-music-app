import styled from "styled-components";

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
  object-fit: cover;
`;

export const SongName = styled.div`
  margin-top: 5px;
  color: #f9f9f9;
  position: relative;
  left: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
