import React from 'react';

const Testimonial = ({testimonial}) => {
    const {image,description}=testimonial;
    return (
        <div class="card w-96 bg-white shadow-xl container mx-auto mb-16">
            <figure><img src={image} alt="Shoes" className="mt-5" /></figure>
            <div class="card-body">
              
                <p>{description}</p>
               
            </div>
            </div>
    );
};

export default Testimonial;