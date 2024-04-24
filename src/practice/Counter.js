import React from "react";

class Counter extends React.Component{
    
    componentDidUpdate(prevProps,prevState){
        if(prevProps.number!==this.props.number){
            console.log("Component Updated.");
        }
    }

    render(){
        return(
            <h1>{this.props.number}</h1>
        )
    }
}

export default Counter;