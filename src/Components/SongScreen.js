import styled from "styled-components";

export const SongScreenContainer = styled.div`
  background: transparent;
  top: 50px;
  left: ${({ open }) => (open ? "-208px" : "0px")};
  height: 250px;
  display: ${({music}) => (typeof music === 'object' ? 'block' : 'none')};
  width: 196px;
  position: relative;
  z-index: 999;
  margin-top: 10px;
  @media screen and (max-width: 560px) {
    flex: 0.1;
    align-items: center;
    position: relative;
    background: #000;
  }
`;
export const SongImgContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
export const SongImg = styled.img`
  height: 170px;
  border-radius: 8px;
  width: 100%;
  object-fit: contain;
`;


