import React from 'react';

const Offer = () => {
    return (
        <div>
            <h1 className="text-3xl text-left mt-28 ml-12 mb-7">Trending Offer</h1>
            <div className="shadow-lg  grid container mx-auto grid-cols-1 md:grid-cols-3">
                 <div>
                  <img src="https://i.ibb.co/5nqfzb2/Rectangle-13-1.png" alt="" />
                 </div>
                 <div>
                    <img className="mx-auto mt-40" src="https://i.ibb.co/mXYyJz8/Vector-3.png" alt="" />
                    <p className="text-5xl mt-2">Min 60% Off</p>
                    <button className="">Explore</button>
                 </div>
            </div>
        </div>
    );
};

export default Offer;