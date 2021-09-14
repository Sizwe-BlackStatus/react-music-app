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
import {
  PlaylistToggleBox,
  PlaylistToggle,
} from "./MusicPlayer/MusicPlayer.js";
import SearchPlaylistButton from "./SearchPlaylistButton.jsx";
import ToggleComponent from "./Toggle.jsx";

function Controls({
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
  playlistToggle,
  playlistOpen
}) {
  return (
    <Lcd className="lcd" toggle={toggle}>
      <ControlsContainer className="controlscontainer">
        <ShuffleRepeatBox className="shufflerepeatbox" onClick={shuffleTrack}>
          <ShuffleIcon />
        </ShuffleRepeatBox>
        <PlaybackControlsContainer className="playbackControlsContainer">
          <PlaybackButton
            className="playbackButton"
            onClick={() => {
              previousTrack();
              setPlaylist();
            }}
          >
            <RewindIcon />
          </PlaybackButton>
          <audio ref={audioEl} src={currTrack.src}></audio>
          <PlaybackButton onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <PlayIcon /> : <PauseIcon />}
          </PlaybackButton>
          <PlaybackButton
            onClick={() => {
              skipTrack();
              setPlaylist();
            }}
          >
            <FastForward />
          </PlaybackButton>
        </PlaybackControlsContainer>
        <ShuffleRepeatBox onClick={repeatTrack}>
          {repeat ? <RepeatOneIcon /> : <RepeatIcon />}
        </ShuffleRepeatBox>
      </ControlsContainer>
      <LcdToggle className="LcdToggle">
        {/* <SearchPlaylistButton playlistToggle={playlistToggle} playlistOpen={playlistOpen}/> */}
        <ToggleComponent toggle={toggle} />
      </LcdToggle>
    </Lcd>
  );
}

export default Controls;
