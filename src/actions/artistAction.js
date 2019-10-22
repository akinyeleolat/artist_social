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


  export const fetchArtistAlbum = (albums, artistId) => {
    return {
      type: FETCH_ALL_ARTIST,
      payload: () => {
        albums.filter(album => album.userId === artistId)
      }
    };
  };

export const getArtistAlbum = (artistId) => {
    return async dispatch => {
      const res = await instance.get('/albums');
      dispatch(fetchArtistAlbum(res.data, artistId));
    };
  };