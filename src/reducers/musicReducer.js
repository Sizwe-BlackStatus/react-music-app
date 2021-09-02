import musicDb from "../musicDb";
const typeOfPlaylist = window.location.pathname
const genres = musicDb.filter((song) => song.genre === typeOfPlaylist);

export const initialState = {
  playlists: musicDb,
  playing: '',
};
const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.payload,
      };
    case "SET_CURR_PLAYING":
      return {
        ...state,
        playing: action.payload,
      };
      default: 
      return state
  }
};

export default musicReducer