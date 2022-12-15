This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



//Course
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
