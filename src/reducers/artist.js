import {
    FETCH_ALL_ARTIST,
  } from './../actions/types';
  
  const initialState = {
    artists: [],
    artist:''
  };

  const ArtistReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_ARTIST:
        return {
          ...state,
          artists: action.payload
        };
      default:
        return state;
    }
  };
  export default ArtistReducers;