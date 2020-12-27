import React from 'react';
const VideoDetail = ({ video }) => {
    if(!video){
        return(<div>Loading...</div>)
    }
    else{
    return ( <div className="ui segment">
        <h4>{video.snippet.title}</h4> 
        <p>{video.snippet.description}</p>
    </div>);
    }
}
export default VideoDetail;