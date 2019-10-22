import instance from './../config/axios';
import { FETCH_ALL_ARTIST } from './types';

export const fetchArtist = artists => {
    return {
      type: FETCH_ALL_ARTIST,
      payload: artists
    };
  };

export const getAllArtist = () => {
    return async dispatch => {
      const res = await instance.get('/users');
      dispatch(fetchArtist(res.data));
    };
  };