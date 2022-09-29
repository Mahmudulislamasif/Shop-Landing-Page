import React from 'react';
import image1 from '../../Assests/Image1.png'
import image2 from '../../Assests/Image2.png'
import image3 from '../../Assests/Image3.png'
import image4 from '../../Assests/Image4.png'
import image5 from '../../Assests/Image5.png'
import image6 from '../../Assests/Image6.png'
const Shop = () => {
    return (
        <div>
            <h1 className="text-3xl text-left mt-28 ml-12 mb-7">Shop by Categories</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mx-auto container text-left">
                 <div  style={{
            background: `url(${image1})`}} className="min-h-screen">
                    <h1 className="text-white  mt-8 ml-7">Womens Pants</h1>
                    <h1 className="text-white ml-7">Explore</h1>
                 </div>
                 <div className="grid md:grid-rows-2 gap-2 ">
                     <div  style={{
            background: `url(${image2})`}}>
                         <h1 className="text-white  mt-8 ml-7">Mens Jacket</h1>
                         <h1 className="text-white ml-7">Explore</h1>
                     </div>
                     <div style={{
            background: `url(${image3})`}}>
                         <h1 className="text-white  mt-8 ml-7">Womens Top</h1>
                         <h1 className="text-white ml-7">Explore</h1>
                     </div>
                 </div>
                 
                 <div className="grid md:grid-rows-2  gap-2">
                     <div style={{
            background: `url(${image4})`}}>
                            <h1 className="text-white  mt-8 ml-7">Sweater</h1>
                            <h1 className="text-white ml-7">Explore</h1>
                     </div>
                     <div className="grid md:grid-cols-2 gap-2">
                        <div style={{
            background: `url(${image5})`}}>
                                <h1 className="text-white  mt-8 ml-7">Pants</h1>
                                <h1 className="text-white ml-7">Explore</h1>
                        </div>
                        <div style={{
            background: `url(${image6})`}}>
                                <h1 className="text-white  mt-8 ml-7">Women Jacket</h1>
                                <h1 className="text-white ml-7">Explore</h1>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Shop;