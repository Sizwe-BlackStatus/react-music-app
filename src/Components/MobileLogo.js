import styled from "styled-components";

export const MobileLogo = styled.div`
  display: none;
  @media screen and (max-width: 560px) {
    display: flex;
    flex: 0.9;
    position: relative;
    top: -3px;
    height: 57px;
    justify-content: center;
  }
`