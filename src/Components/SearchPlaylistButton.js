import styled from "styled-components";
import { CgPlayList } from "react-icons/cg";

export const PlaylistToggleBox = styled.div`
  position: relative;
  top: 12px;
  left: 14%;
  width: 10%;
  height: 25px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    left: 0;
    width: 27px;
  }

  @media screen and (max-width: 560px) {
      display: none;
  }
`;

export const PlaylistToggle = styled(CgPlayList)`
  position: relative;
  color: white;
  font-size: 27px;
`;
