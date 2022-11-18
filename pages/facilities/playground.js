import React from "react";
export const getStaticProps=()=>{
    //..api call
    return{
      props:{ footerstatus : true}
    }
  }
const playground=(props) =>{
   
    return(
        <div>
            <h1>This is a playground page. </h1>
        </div>
    )

}
export default playground