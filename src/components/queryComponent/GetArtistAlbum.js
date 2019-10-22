import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { getArtistAlbum} from './../../actions/artistAction';
// import ArtistList from './ArtistList';

class Albums extends Component {
    componentDidMount() {
        const artistId = this.props.match.params.id;
        console.log(artistId);
    //   this.props.getAllArtist();
    }
  
    render() {
      const albumListItem = this.props.albums;
      return (
        <Fragment>
         {/* {artistListItem.length < 1 ? (
              '...loading'
            ) : (
              <ArtistList
                key={artistListItem.id}
                artists={artistListItem}
              />
            )} */}
        </Fragment>
      );
    }
  }
  
  Albums.propTypes = {
    albums: PropTypes.array.isRequired,
  };


  
  const mapStateToProps = ({albums}) => (
      {
    albums: albums.albums,
  });
  

export default connect(() => mapStateToProps, { getArtistAlbum })(Albums)