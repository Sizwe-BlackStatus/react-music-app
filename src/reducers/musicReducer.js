export const initialState = {
  playing: '',
};
const musicReducer = (state = initialState, action) => {
  switch (action.type) {
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