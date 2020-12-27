import React from 'react';
import './VideoItem.css'
const VideoItem = ({ videoInfo }) => {
    return (
    <div className="item video-item">
        <img
        src={videoInfo.snippet.thumbnails.medium.url}   
        alt=""
        className="ui image"
        />
        <div className="content">
            <div className="header">
            {videoInfo.snippet.title}
            </div>
            <div class="description">
                {videoInfo.snippet.description}
            </div>
        </div>

    </div>  );
}
export default VideoItem;