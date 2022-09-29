import React from 'react';

const ProductRow = ({product}) => {
    const {image,title,brand,price}=product;
    return (
        
            <div class="card bg-white text-left shadow-xl mx-auto w-10/12 md:w-full ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class=" text-2xl text-[#272727]">{title}</h2>
                <p className="text-lg text-[#272727]">{brand}</p>
                <div className="flex">
                    <p className="text-2xl text-[#272727]">Rs. {price}</p>
                    <del className="text-[#848484] text-lg">Rs. 1000</del>
                    <p  className="text-[#0A8200] text-lg ml-3.5">(80% off)</p>
                </div>
            </div>
            </div>
        
    );
};

export default ProductRow;