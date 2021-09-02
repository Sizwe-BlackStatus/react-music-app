import styled from "styled-components"
import {CgMiniPlayer} from "react-icons/cg"

export const ToggleContainer = styled.div`
  position: relative;
  left: 24%;
  top: 12px;
  width: 7%;
  height: 25px;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
export const ToggleButton = styled.button`
  width: 100%;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ToggleIcon = styled(CgMiniPlayer)`
  font-size: 25px;
  color: #f3f3f3;
`;