import React from 'react';

const Deal = ({deal}) => {
    const {image,offer,price}=deal;
    return (
        <div class="card mx-auto w-10/12 md:w-full bg-white text-left shadow-xl ">
        <figure><img src={image} alt="Shoes" /></figure>
        <div class="card-body">
            <img src={offer}className="mt-7" alt="" />
            <p className="text-3xl text-center mt-11 text-[#272727] ">Best of the Styles</p>
            <div className="flex">
                <p className="text-base text-center my-6 text-[#272727]">Under Rs. 799</p>
              
            </div>
        </div>
        </div>
    );
};

export default Deal;