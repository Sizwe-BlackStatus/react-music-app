import React from "react";
import {
  ControlsContainer,
  Lcd,
  ShuffleIcon,
  PlaybackControlsContainer,
  PlaybackButton,
  RewindIcon,
  PlayIcon,
  PauseIcon,
  FastForward,
  RepeatIcon,
  RepeatOneIcon,
  ShuffleRepeatBox,
  LcdToggle,
} from "./Controls";
import ToggleComponent from "./Toggle.jsx";

function Controls({
  open,
  toggle,
  skipTrack,
  setIsPlaying,
  isPlaying,
  previousTrack,
  repeat,
  repeatTrack,
  shuffleTrack,
  audioEl,
  currTrack,
  setPlaylist,
}) {
  return (
    <Lcd className="lcd" open={open} toggle={toggle}>
      <ControlsContainer className="controlscontainer">
        <ShuffleRepeatBox className="shufflerepeatbox" onClick={shuffleTrack}>
          <ShuffleIcon />
        </ShuffleRepeatBox>
        <PlaybackControlsContainer className="playbackControlsContainer">
          <PlaybackButton className="playbackButton" onClick={previousTrack}>
            <RewindIcon />
          </PlaybackButton>
          <audio ref={audioEl} src={currTrack.src}></audio>
          <PlaybackButton
            onClick={() => {
              setIsPlaying(!isPlaying);
              setPlaylist();
            }}
          >
            {isPlaying ? <PlayIcon /> : <PauseIcon />}
          </PlaybackButton>
          <PlaybackButton onClick={skipTrack}>
            <FastForward />
          </PlaybackButton>
        </PlaybackControlsContainer>
        <ShuffleRepeatBox onClick={repeatTrack}>
          {repeat ? <RepeatOneIcon /> : <RepeatIcon />}
        </ShuffleRepeatBox>
      </ControlsContainer>
      <LcdToggle className="LcdToggle">
        <ToggleComponent open={open} toggle={toggle} />
      </LcdToggle>
    </Lcd>
  );
}

export default Controls;
