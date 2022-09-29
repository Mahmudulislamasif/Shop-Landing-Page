import React from 'react';
import Cross from '../../Assests/Cross.png'
const Discount = () => {
    return (
        <div className="bg-[#F9FAFF] h-14 flex justify-between items-center ">
            <div className="flex mx-auto">
                <h1 className="text-[#272727] text-sm">Invite Friends and get 50% off on your next purchase</h1>
                <h1 className="text-[#00398F] ml-3.5 text-sm">Invite Now</h1>
            </div>
            <div className="mr-2">
              <img src={Cross} alt="" />
            </div>
        </div>
    );
};

export default Discount;