import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
   const videosDisplay = videos.map( vid => <VideoItem videoInfo={vid}/>)
    return ( 
    <div>
        {videosDisplay}
    </div>
);
}

export default VideoList;