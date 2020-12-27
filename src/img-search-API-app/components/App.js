import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';

class App extends React.Component{

    state = {images : []};

     onSubmit = async (searchTerm)=>{
        const resp = await axios.get('https://api.unsplash.com/search/photos/',{
        params:{
            query: searchTerm
        },
        headers:{
            Authorization: `Client-ID ueOTRjeNx9mLLmYVVAVezsejZXV752hARdi8sYGXSu0`
        }
        });
        this.setState({images: resp.data.results});

    }
    render(){
    return (<>
    <div className="ui container" style={{marginTop: '10px'}}>
    <SearchBar onSubmit={this.onSubmit}/>
    <div>Found {this.state.images.length} Images</div>
    <ImagesList images={this.state.images}/>
    </div>
    </>  );
    }
}
export default App;