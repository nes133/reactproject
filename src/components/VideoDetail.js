import React from 'react';

const videoDetail = props => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoPlayer = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoPlayer} />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{props.video.snippet.title}</h3>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default videoDetail;
