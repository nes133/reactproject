import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = term => {
    const part = 'snippet';
    const maxResult = 5;
    const key = 'AIzaSyBb0RqbiyfRgdFFNXErZEXcEPBGuHOdEoc';
    const q = term;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResult=${maxResult}&key=${key}&q=${q}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ videos: data.items });
      });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
