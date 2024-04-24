import React from "react";
// import Counter from './Counter'
import Counter1 from "./Counter1";
class Profile extends React.Component{
   constructor(){
      super();
      this.state={
         count:0
      }
   }
   componentDidMount(){
      console.log("componentDidMount:when component render first time.");
   }
   increment(){
      this.setState({count:this.state.count+1});
   }

   componentWillUnmount(){
      console.log("componentWillUnmount: Component Removed")
   }
   render(){
      return(
         <>
         {/* <Counter number={this.state.count}/> */}
         <Counter1 number={this.state.count}/>
         <button onClick={this.increment.bind(this)}>Click Me</button>
         </>
      )
   }
}

 
export default Profile;
