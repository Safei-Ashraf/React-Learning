import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
   const videosDisplay = videos.map( vid => <VideoItem videoInfo={vid}/>)
    return ( 
    <div className="ui relaxed divded list">
        {videosDisplay}
    </div>
);
}

export default VideoList;