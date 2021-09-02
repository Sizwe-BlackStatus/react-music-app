import styled from "styled-components";
import { FaWaveSquare } from "react-icons/fa";

export const LogoContainer = styled.div`
min-width: 197px;
height: 54px;
background: rgb(15 17 28);
a:link {
  text-decoration: none;
}
@media screen and (max-width: 560px) {
  width: 100%;
}
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 27.5px;
  font-weight: Bold;
  color: rgba(0, 0, 0, 0.85);
  margin-top: 17px;
  margin-bottom: 18px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
`;

export const WaveIcon = styled(FaWaveSquare)`
  font-size: 25px;
  color: #f3f3f3;
`;
export const WaveHeading = styled.h1`
  font-size: 24px;
  margin-left: 9px;
  color: #f3f3f3;
`;