import React from 'react';
import Logo from '../../Assests/FooterLogo.png'
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-[#00071B] ">
            <div className="flex pt-8 pl-4">
                    <img src={Logo} alt="" />
                    <h1 className="text-6xl text-white ml-3">Globex</h1>
            </div>
            <footer class="footer grid-cols-1 md:grid-cols-6 p-10  text-neutral-content ">
              
            <div>
                <span class="font-bold  text-white">Women</span> 
                <a class="link link-hover">All Women</a> 
                <a class="link link-hover">Skirts</a> 
                <a class="link link-hover">T-Shirts</a> 
                <a class="link link-hover">Tops</a>
                <a href="link link-hover">Jacket</a>
            </div> 
            <div>
                <span class="font-bold  text-white">Men</span> 
                <a class="link link-hover">All Men</a> 
                <a class="link link-hover">Skirts</a> 
                <a class="link link-hover">T-Shirts</a> 
                <a class="link link-hover">Tops</a>
                <a href="link link-hover">Jacket</a>
            </div> 
            <div>
                <span class="font-bold  text-white">Kids</span> 
                <a class="link link-hover">All Kids</a> 
                <a class="link link-hover">Skirts</a> 
                <a class="link link-hover">T-Shirts</a> 
                <a class="link link-hover">Tops</a>
                <a href="link link-hover">Jacket</a>
            </div> 
            <div>
                <span class="font-bold  text-white">Shopping</span> 
                <a class="link link-hover">your cart</a> 
                <a class="link link-hover">your orders </a> 
                <a class="link link-hover">Compared items</a> 
                <a class="link link-hover">Wishlist</a>
                <a href="link link-hover">Shipping details</a>
            </div> 
            <div>
                <span class="font-bold  text-white">More links</span> 
                <a class="link link-hover">Blogs</a> 
                <a class="link link-hover">Gift center</a> 
                <a class="link link-hover">Buying guides</a> 
                <a class="link link-hover">New arrivals</a>
                <a href="link link-hover">Clearence</a>
            </div> 
            <div>
                <span class="font-bold  text-white">Stay In Touch</span> 
                <h1 className="text-justify">Stay in touch to get special offers, free giveaways
and once in a lifetime deals</h1> 
                <input type="text" className="bg-[#00071B]" placeholder="Enter your email" />
            </div> 
           
            </footer>
            <div className=' border-white border-t-2 block md:flex justify-evenly items-center pt-2 '>
                   <div>
                     <h1 className="text-white">Terms & Conditions</h1>
                   </div>
                   <div>
                     <h1 className="text-white">Privacy & Policy</h1>
                   </div>
                   <div className="flex">
                      <div>
                        <AiOutlineFacebook className="text-white text-xl"/>
                      </div>
                      
                     <div>
                        <AiOutlineInstagram className="text-white text-xl ml-4"/>
                     </div>
                     <div>
                        <BsWhatsapp className="text-white text-xl ml-4"/>
                     </div>
                    <div>
                        <AiOutlineTwitter className="text-white text-xl ml-4"/>
                    </div>
                   </div>
            </div>
        </div>
    );
};

export default Footer;