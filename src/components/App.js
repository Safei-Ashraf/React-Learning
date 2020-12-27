import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';

class App  extends React.Component{

state = {videos : [] };

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
    render(){
        return (
        <div className="ui container">
            App
            <SearchBar onSearchSubmit={this.onSearchTermSubmit}/>
            We have found {this.state.videos.length} Videos!
            <VideoList videos={this.state.videos}/>
        </div>);
        }
}

export default App;