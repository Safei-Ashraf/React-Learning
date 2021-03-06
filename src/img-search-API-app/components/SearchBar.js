import React, { Component } from 'react'

export default class SearchBar extends Component{
    state = {searchTerm: ''};

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }
    render(){
        let warningMsg;
        warningMsg = this.state.searchTerm.length < 3? `Search term has to be at least 3 characters long` :'';
        return(<>
        <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
                <label>Image Search</label>
                <input 
                text="search" 
                onChange={e=>this.setState({searchTerm:e.target.value.toUpperCase()})}
                value={this.state.searchTerm}
                />
            </div>
            <div style={{color: 'red', fontStyle:'italic'}}>{warningMsg}</div>
        </form>    
        </div>    
            </>);
    }
}

