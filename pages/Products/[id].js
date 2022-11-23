import React from "react";
import { useRouter } from 'next/router';

const CoursesID =(context) =>{
    //console.log('ID',context.prams.id);
    const router = useRouter();
    const {id} = router.query;
    console.log('id' - id);
    // console.log('props', props);
    // const {productData} = props;
    // console.log('ID - ', context.params.id);
    return (
        <div>
                <h2>This is product page - {id}</h2>
                {/* {productData.map(item => (
                    <div>{item.title}</div>
                ))} */}
            </div>
    )
}

export default CoursesID