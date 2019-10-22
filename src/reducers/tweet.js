import {
    FETCH_ALL_ARTIST_TWEET,
    ADD_TWEET,
    EDIT_TWEET,
    DELETE_TWEET
  } from './../actions/types';
  
  const initialState = {
    tweets: [],
    tweet: ''
  };
  
  const TweetReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_ARTIST_TWEET:
        return {
          ...state,
          tweets: action.payload
        };
      case ADD_TWEET:
        return {
          ...state,
          tweet: action.payload
        };
      case EDIT_TWEET:
        return {
          ...state,
          tweet: action.payload
        };
      case DELETE_TWEET:
        return state;
      default:
        return state;
    }
  };
  export default TweetReducers;
  