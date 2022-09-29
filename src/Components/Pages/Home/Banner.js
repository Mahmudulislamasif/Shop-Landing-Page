import React from 'react';
import banner1 from '../../Assests/Rectangle373.png'
import banner2 from '../../Assests/Rectangle374.png'
const Banner = () => {
    return (
        <div className="flex">
            <img className="w-1/2" src={banner2} alt="" />
            <div style={{
            background: `url(${banner1})`,backgroundSize:"cover"}} className="w-full">
             <h1 className="text-[#272727] text-7xl mt-20">PRADA</h1>
             <h1 className="text-[#565656] text-5xl mt-16">Big Fashion Festival</h1>
             <h1 className="text-[#565656] text-5xl mt-5">50%-80% off</h1>
             <button class="rounded border border-[#272727] py-2 px-3 mt-4">Explore</button>
            </div>
        </div>
    );
};

export default Banner;