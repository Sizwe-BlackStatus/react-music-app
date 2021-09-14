import styled from "styled-components";
import {
  IoShuffleOutline,
  IoRepeat,
  IoMusicalNotes,
  IoMenuOutline,
} from "react-icons/io5";
import { FaPlay, FaApple } from "react-icons/fa";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

export const SongScreenContainer = styled.div`
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: 54px;
  background: #000000;
  grid-area: control;

  @media screen and (max-width: 560px) {
    position: absolute;
    bottom: ${({ music }) => (typeof music === "object" ? "0px" : "-180px")};
    width: 100%;
    z-index: 10;
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

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  width: 55%;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ShuffleIcon = styled(IoShuffleOutline)`
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

export const PlayIcon = styled(FaPlay)`
  color: #f3f3f3;
  font-size: 25px;
  :hover {
    background: #202439;
  }
`;

export const RepeatIcon = styled(IoRepeat)`
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

export const MusicLogo = styled.div`
  background: #ebebeb;
  width: 56px;
`;

export const MusicNoteIcon = styled(IoMusicalNotes)`
  position: relative;
  top: 7px;
  width: 100%;
  height: 28px;
  color: #e3e3e3;
`;

export const AppleLogoContainer = styled.div`
  width: 100%;
`;
export const AppleLogo = styled.div`
  position: relative;
  top: 5px;
  text-align: center;
`;

export const AppleIcon = styled(FaApple)`
  font-size: 28px;
  opacity: 0.5;
`;

export const VolumeLcd = styled.div`
  display: flex;
  position: relative;
  top: 19px;
  margin-left: 20%;
  margin-right: 20%;
  width: 27%;
  height: 18px;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    top: 14px;
  }
`;

export const SpeakerIcon = styled(GiSpeaker)`
  color: #f3f3f3;
  width: 30px;
  cursor: pointer;
`;

export const SpeakerOffIcon = styled(GiSpeakerOff)`
  color: #f3f3f3;
  width: 30px;
  cursor: pointer;
`;

export const VolumeSlider = styled.input`
  position: relative;
  top: 7px;
  width: 70px;
  height: 3px;
`;

export const UpcomingSongs = styled.div`
  position: relative;
  top: 13px;
  width: 23%;
  height: 22px;
  text-align: center;
`;

export const UpcomingSongsBtn = styled.button`
  padding: 2px;
  width: 7%;
  height: 22px;
  border: none;
  background: none;
`;

export const UpcomingSongsIcon = styled(IoMenuOutline)`
  font-size: 22px;
  opacity: 0.5;
`;

export const LcdToggle = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
    flex: 0.1;
    position: relative;
    top: -3px;
    margin-right: 10px;
  }
`;
