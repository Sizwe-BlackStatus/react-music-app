import styled from "styled-components";
import { HiMenuAlt4 } from "react-icons/hi";

export const HamburgerMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 560px) {
    display: flex;
    flex: 0.1;
    align-items: center;
    position: relative;
    background: #000;
    height: 54px;
  }
`;
export const HamburgerMenuIcon = styled(HiMenuAlt4)`
  @media screen and (max-width: 560px) {
    color: #f3f3f3;
    width: 59px;
    height: 27px;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 54px;
`;

export const Img = styled.img`
  height: 54px;
  object-fit: contain;
`;

export const SongName = styled.div`
  margin-top: 5px;
  color: #f9f9f9;
  position: relative;
  left: 11px;
`;