import React from "react";
export const getStaticProps=()=>{
    //..api call
    return{
      props:{ footerstatus : true}
    }
  }
const library=(props) =>{
   
    return(
        <div>
            <h1>This is a library page. </h1>
        </div>
    )

}
export default library