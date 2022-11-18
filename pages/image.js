import React from "react";
const image =(props) =>{
    const {src,alt,height,width} = props
    return(
        <div>
            <img src={src} width={width} height={height} alt={alt}/>
        </div>
    )

}
export default image