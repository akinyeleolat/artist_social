import { combineReducers } from 'redux';
import artist from './artist';
import album from './album';
import tweet from './tweet';

export default combineReducers({
  artist,
  album,
  tweet
});