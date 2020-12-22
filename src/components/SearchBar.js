import React, { Component } from 'react'

export default class SearchBar extends Component{
    state = {searchTerm: ''};


    render(){
        let warningMsg;
        warningMsg = this.state.searchTerm.length < 3? `Search term has to be at least 3 characters long` :'';
        return(<>
        <div className="ui segment">
        <form className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input 
                text="search" 
                onChange={e=>this.setState({searchTerm:e.target.value.toUpperCase()})}
                value={this.state.searchTerm}
                />
            </div>
            <div>{warningMsg}</div>
        </form>    
        </div>    
            </>);
    }
}

