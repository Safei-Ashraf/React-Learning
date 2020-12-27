import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App  extends React.Component{

state = {videos : [], selectedVideo : null };

onSearchTermSubmit = async (searchTerm)=>{
        //handle search
        console.log(searchTerm);
        const resp =   await youtube.get(`/search`, 
        {params : {
            q: searchTerm,
        }
        });

        this.setState({videos : resp.data.items});
    }

    onVideoSelect = (video)=>{
        this.setState({selectedVideo: video});
    }
    render(){
        return (
        <div className="ui container">
            App
            <SearchBar onSearchSubmit={this.onSearchTermSubmit}/>
            We have found {this.state.videos.length} Videos!
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>);
        }
}

export default App;