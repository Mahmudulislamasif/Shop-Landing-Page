import React from 'react';
import logo from '../../Assests/Logo.png'
import like from '../../Assests/Like.png'
import cart from '../../Assests/Cart.png'
import face from '../../Assests/Ellipse 1 (1).png'
import search from '../../Assests/Vector.png'
const Navbar = () => {
    return (
        <div>
            <div class="navbar h-20 bg-[#FFFFFF] shadow-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <img src={logo} className="my-4 ml-12" alt="" />
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
      
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Men</a></li>
            <li><a>Women</a></li>
            <li><a>Kids</a></li>
            <li><a>Shop</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div class="navbar-end">
             <div className="flex relative">
               <input type="text" placeholder="search" className="border bottom-2 py-1 px-2" />
               <img src={search} alt="" className="absolute right-1 top-1" />
             </div>
            <img src={like} alt="" className="mx-4" />
            <img src={cart} alt="" className="mx-4" />
            <img src={face} alt="" className="mx-4" />
        </div>
        </div>
        </div>
    );
};

export default Navbar;