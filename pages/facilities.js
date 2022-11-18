import React from "react";
import Link from 'next/link';
export const getStaticProps=()=>{
    //..api call
    return{
      props:{ footerstatus : true}
    }
  }

const facilities =(props) =>{
   
    return(
        <div>
      
            <h1>This is a facilities files in  Next Js Training folder.</h1>
            <ui>
                <li><Link href="/facilities/lab" >lab</Link></li>
                <li><Link href="/facilities/playground">playground</Link></li>
                <li><Link href="/facilities/library">library</Link></li>
                <li><Link href="/facilities/sports">sports</Link></li>
            </ui>
  
        </div>
    )

}
export default facilities