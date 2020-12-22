import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component{

    state = {

        lat :null,
        error : null
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
                console.log('laaaaat',position.coords.latitude);
            },
            err => this.setState({error: err.message})
        )
    }
    renderContet(){
        if(!this.state.error && this.state.lat)
        {
        return (
            <>
            <SeasonDisplay lat={this.state.lat}/>
            </>)
            }
        if(this.state.error && !this.state.lat)
        {
            return(
                <>
                Error : {this.state.error}
                </>
            )
        }
        if(!this.state.error && !this.state.lat)
        {
            return(<>
               <LoadingSpinner message={`Please Allow Us To Use Your Location`}/>
            </>)
    }}
    render()
    {return  (<>{this.renderContet()}</>)}
    }

export default App;

ReactDOM.render(<App/>,document.querySelector('#root'));


