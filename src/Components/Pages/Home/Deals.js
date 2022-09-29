import React, { useEffect, useState } from 'react';
import Deal from './Deal';
const Deals = () => {
    const [deals,setDeals]=useState([])
    useEffect(()=>{
        fetch('Deals.json')
        .then(res=>res.json())
        .then(data=>setDeals(data))
    })
    return (
        <div>
            <h1 className="text-3xl text-left mt-28 ml-12 mb-7">Deals of the Day</h1>
             <div className="grid container mx-auto grid-cols-1 md:grid-cols-3 gap-5">
                {
                    deals.map((deal)=><Deal deal={deal} key={deal.id}></Deal>)
                }
             </div>
        </div>
    );
};

export default Deals;