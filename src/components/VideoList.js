import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
   const videosDisplay = videos.map( vid => <VideoItem video={vid} onVideoSelect={onVideoSelect}/>)
    return ( 
    <div className="ui relaxed divded list">
        {videosDisplay}
    </div>
);
}

export default VideoList;