import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllArtist } from './../../actions/artistAction';
import ArtistList from './ArtistList';

class Artist extends Component {
    componentDidMount() {
      this.props.getAllArtist();
    }
  
    render() {
      const artistListItem = this.props.artists;
      return (
        <Fragment>
         {artistListItem.length < 1 ? (
              '...loading'
            ) : (
              <ArtistList
                key={artistListItem.id}
                artists={artistListItem}
              />
            )}
        </Fragment>
      );
    }
  }
  
  Artist.propTypes = {
    artists: PropTypes.array.isRequired,
  };


  
  const mapStateToProps = ({artist}) => (
      {
    artists: artist.artists,
  });
  
  export default connect(
    mapStateToProps,
    { getAllArtist }
  )(Artist);