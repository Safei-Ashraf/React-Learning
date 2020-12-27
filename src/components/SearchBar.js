import React from 'react';

export default class SearchBar extends React.Component{

    state = {searchTerm : ''};
    onInputChange = (e)=>{
        this.setState({searchTerm: e.target.value})
    }
    onFormSubmit = (e)=>{
        e.preventDefault();
        //callback from Parent Component;
        this.setState({searchTerm : ''});
    }
    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>            
            </div>
        )
    }
}
