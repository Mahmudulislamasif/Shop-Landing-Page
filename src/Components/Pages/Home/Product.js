import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow'
const Product = () => {
   
    const [product,setProducts]=useState([])
    useEffect(()=>{
        fetch('Products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })
    return (
        <div>
            <h1 className="text-3xl text-left mt-28 ml-12 mb-7">Trending Now</h1>
             <div className="grid container md:container mx-auto md:mx-auto grid-cols-1 md:grid-cols-3 gap-5">
                {
                    product.map((product)=><ProductRow product={product} key={product.id}></ProductRow>)
                }
             </div>
        </div>
    );
};

export default Product;