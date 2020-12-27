import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App  extends React.Component{

state = {videos : [], selectedVideo : null };
componentDidMount(){
    this.onSearchTermSubmit('League of legends cinematic')
}
onSearchTermSubmit = async (searchTerm)=>{
        //handle search
        console.log(searchTerm);
        const resp =   await youtube.get(`/search`, 
        {params : {
            q: searchTerm,
        }
        });

        this.setState({videos : resp.data.items,
        selectedVideo: resp.data.items[0]});
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
            <div className="ui grid">
                <div className="ui row">
                    <div className="nine wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="seven wide column" >
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>);
        }
}

export default App;