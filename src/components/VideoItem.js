import React from 'react';
const VideoItem = ({ videoInfo }) => {
    return (
    <div>
    {videoInfo.snippet.title}
    <img
        src={videoInfo.snippet.thumbnails.medium.url}   
        alt=""
    />
    </div>  );
}
 
export default VideoItem;