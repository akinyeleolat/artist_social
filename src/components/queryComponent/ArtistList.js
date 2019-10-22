import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ArtistCard from './ArtistCard';

const CardList = (artists) => {
  return (
    <Fragment>
      {artists.length < 0 ? ('...loading') : (artists.artists.map((artist, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ArtistCard key={artist.id} artist={artist}/>
        </Grid>
      )))}
    </Fragment>
  );
};

export default CardList;