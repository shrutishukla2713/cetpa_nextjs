import React from "react";

export const getStaticProps=()=>{
    //..api call
    return{
      props:{ footerstatus : true}
    }
  }
const sports=(props) =>{
   
    return(
        <div>
            <h1>This is a sports page. </h1>
        </div>
    )

}
export default sports