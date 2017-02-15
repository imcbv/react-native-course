import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [], dimensions: undefined };

  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  onLayout = event => {
      const { width, height } = event.nativeEvent.layout;
      this.setState({ dimensions: { width, height } });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView onLayout={this.onLayout}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}

export default AlbumList;
