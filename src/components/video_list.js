import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // const videos = props.videos;  // array of videos passed from app.js
  const videoItems =  props.videos.map ((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
// col-md-4 = bootstrap column
