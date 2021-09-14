import styled from "styled-components";
import { HiRewind, HiFastForward } from "react-icons/hi";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdRepeat, MdRepeatOne, MdShuffle } from "react-icons/md";

export const Lcd = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 20%;
  background: #0f111c;
  border: 1.5px solid #282828;
  width: 47%;

  @media screen and (max-width: 1000px) {
    max-width: 1032px;
    margin: 5px auto;
    width: 98%;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  width: 230px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex: 0.9;
  }
`;

export const ShuffleIcon = styled(MdShuffle)`
  color: #f3f3f3;
  font-size: 20px;
`;

export const PlaybackControlsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100px;
`;
export const PlaybackButton = styled.button`
  width: 100%;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  :hover {
    background: #202439;
  }
`;

export const RewindIcon = styled(HiRewind)`
  color: #f3f3f3;
  font-size: 25px;
  :hover {
    background: #202439;
  }
`;

export const PlayIcon = styled(FaPlay)`
  color: #f3f3f3;
  font-size: 22px;
  :hover {
    background: #202439;
  }
`;

export const PauseIcon = styled(FaPause)`
  color: #f3f3f3;
  font-size: 22px;
  :hover {
    background: #202439;
  }
`;

export const FastForward = styled(HiFastForward)`
  color: #f3f3f3;
  font-size: 25px;
  :hover {
    background: #202439;
  }
`;
export const RepeatIcon = styled(MdRepeat)`
  color: #f3f3f3;
  font-size: 20px;
  :hover {
    background: #202439;
  }
`;

export const RepeatOneIcon = styled(MdRepeatOne)`
  color: #f3f3f3;
  font-size: 20px;
  :hover {
    background: #202439;
  }
`;
export const ShuffleRepeatBox = styled.div`
  width: 10%;
  height: 22px;
  cursor: pointer;
  text-align: center;
  justify-content: center;

  :hover {
    background: #202439;
  }
`;

export const LcdToggle = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex: 0.1;
    position: relative;
    top: -3px;
    margin-right: 5px;
  }
`;
export const Audio = styled.audio``;

export const SongImgContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;
export const SongImg = styled.img`
  height: 170px;
  border-radius: 8px;
  width: 100%;
  object-fit: contain;
`;

