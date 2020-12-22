const LoadingSpinner = (props) => {
    return (  
       <>
       <div className="ui active inverted dimmer">
    <div className="ui massive text loader">{props.message}</div>
  </div>
  <p></p>
  <p></p>
  <p></p>
  </>
    );}

    LoadingSpinner.defaultProps = {message:`Loading...`}
export default LoadingSpinner;