import React from "react";
import Image from 'next/image';
import Styles from '../styles/Courses.module.css'


export const getStaticProps =async ( ) => {
    //..api call
    const response = await fetch('https://fakestoreapi.com/products?sort=desc');
    const data = await response.json();
    return {
        props: {productData:data}
    }
  }
const Courses=(props) =>{
   
    console.log(props,"propssssss");
    const {productData} = props;
    return ( 
        <>
        <center><h2>BIGGEST DEALS ON TOP BRANDS</h2></center>
        <div className='container'>
        <div className='row'>
        {productData.map(item => (
                       
                <div className='col-md-3'>
                <div className='mb-4 p-3 '>
                <img src={item.image} alt=".." className={Styles.img_responsive} />
                <h4 className='fs-6'>{item.title}</h4>               
                <p className={Styles.elipsis}>{item.description}</p>
                <h6>Rs. {item.price}</h6>
                </div>
                </div>
            

            
            
        ))}
        </div>
        </div>
        </>
     )

}
export default Courses