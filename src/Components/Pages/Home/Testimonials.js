import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testimonial from './Testimonial';
const Testimonials = () => {
    const [testimonials,setTestimonial]=useState([])
    useEffect(()=>{
        fetch('Testimonials.json')
        .then(res=>res.json())
        .then(data=>setTestimonial(data))
    })
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <h1 className="text-3xl text-left mt-28 ml-12 mb-7">What Our Customer Says</h1>
            <Carousel responsive={responsive}>
               {
                testimonials.map((testimonial)=><Testimonial testimonial={testimonial} key={testimonial.id}></Testimonial>)
               }
            </Carousel>
        </div>
    );
};

export default Testimonials;