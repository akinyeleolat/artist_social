import {
    FETCH_ARTIST_ALBUM,
  } from './../actions/types';
  
  const initialState = {
    albums: [],
    album:''
  };

  const AlbumsReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ARTIST_ALBUM:
        return {
          ...state,
          albums: action.payload
        };
      default:
        return state;
    }
  };
  export default AlbumsReducers;