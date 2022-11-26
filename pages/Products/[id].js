import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faHeartCirclePlus
    
  } from "@fortawesome/free-solid-svg-icons";
  
// SSR (Server Side Rendering) - HTML pages are built on server request

export async function getServerSideProps(context) {
    try {
        const { id } = context.query;
        const res = await fetch('https://fakestoreapi.com/products/' + id);
        const data = await res.json();
        return {
            props: {productData: data }
        };
    } catch (error) {
        return {
            notFound: true
        }
    }

}

const CoursesID =({productData}) =>{
     // console.log(productData);
    // const router = useRouter();
    // const {id} = router.query;
    // console.log('id' - id);
    //console.log('props-', productData.data)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Product Detail Page -SSR Method</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div><img src={productData.image} width="100%" /></div>
                </div>
                <div className="col-6">
                    <h3>Products : {productData.title}</h3>
                    <p><strong>Category:</strong> {productData.category}</p>
                    <p><strong>Descriptions:</strong> {productData.description}</p>
                    <h5>Rating : {productData.rating.rate}, Count : {productData.rating.count}</h5>
                    <p><strong>Price:</strong> ${productData.price}</p>
                    <div><Link className="btn btn-large btn-secondary m-1" href="#"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</Link>
                    <Link className="btn btn-large btn-outline-secondary m-1" href="#"><FontAwesomeIcon icon={faHeartCirclePlus} /> Wishlist</Link></div>
                   
                </div>

            </div>
        </div>
    )
}

export default CoursesID