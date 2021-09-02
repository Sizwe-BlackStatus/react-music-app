import React, { useState, useRef, useEffect } from "react";
import Controls from "../Controls.jsx";
import ToggleComponent from "../Toggle.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {
  SongScreenContainer,
  VolumeContainer,
  VolumeLcd,
  SpeakerIcon,
  SpeakerOffIcon,
} from "./MusicPlayer.js";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaying, setPlaylist } from "../actions/actions.js";

const useStyles = makeStyles({
  volumeSlider: {
    width: "60%",
    color: "#f9f9f9",
  },
});

function MusicPlayer({
  open,
  toggle,
  music,
  skipTrack,
  previousTrack,
  repeatTrack,
  shuffleTrack,
}) {
  const classes = useStyles();
  const [currTrack, setCurrTrack] = useState(music);
  const [repeat, setRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const audioEl = useRef(null);
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.musicReducer);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleMute = () => {
    setMute(!mute);
  };

  function repeatTrack() {
    setRepeat(!repeat);
  }
  function shuffleTrack() {
    setShuffle(!shuffle);
    if (!shuffle) {
      playlists.sort(() => Math.random() - 0.5);
    }
  }

  function skipTrack() {
    let currentTrackId = currTrack.id + 1;
    if (currentTrackId > playlists.length - 1) {
      currentTrackId = 0;
    }
    dispatch(setCurrentPlaying(playlists[currentTrackId]));
  }

  function previousTrack() {
    let currentTrackId = currTrack.id - 1;
    if (currentTrackId < 0) {
      currentTrackId = playlists.length - 1;
    }
    dispatch(setCurrentPlaying(playlists[currentTrackId]));
  }

  useEffect(() => {
    if (!isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
    audioEl.current.volume = volume / 100;
    audioEl.current.muted = mute;
    audioEl.current.loop = repeat;
  });

  useEffect(() => {
    setCurrTrack(music);
  }, [music]);

  useEffect(() => {
    audioEl.current.onended = () => {
      skipTrack();
    };
  });

  return (
    <SongScreenContainer className="SongScreenContainer" music={music}>
      <Controls
        open={open}
        toggle={toggle}
        currTrack={currTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        skipTrack={skipTrack}
        previousTrack={previousTrack}
        repeat={repeat}
        repeatTrack={repeatTrack}
        shuffleTrack={shuffleTrack}
        audioEl={audioEl}
        setPlaylist={setPlaylist}
      />
      <VolumeContainer className="volumeContainer">
        <VolumeLcd className="volumeLcd">
          {mute ? (
            <SpeakerOffIcon onClick={handleMute} />
          ) : (
            <SpeakerIcon onClick={handleMute} />
          )}
          <Slider
            className={classes.volumeSlider}
            type="range"
            value={volume}
            onChange={handleVolumeChange}
          ></Slider>
        </VolumeLcd>
        <ToggleComponent open={open} toggle={toggle} />
      </VolumeContainer>
    </SongScreenContainer>
  );
}

export default MusicPlayer;
