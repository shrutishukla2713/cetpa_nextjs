import React from "react";
export const getStaticProps=()=>{
    //..api call
    return{
      props:{ footerstatus : true}
    }
  }
const lab=(props) =>{
   
    return(
        <div>
            <h1>This is a Lab page. </h1>
        </div>
    )

}
export default lab