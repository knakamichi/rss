import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // {video} = {props}, const video = props.video
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    // whenever li is clicked, call the passed function with the clicked video key
    <li onClick={() => onVideoSelect(video)} className= "list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src = {imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
