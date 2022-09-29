import React from 'react';
import backgroudImage from '../../Assests/bg.png'
const BackgroundBanner = () => {
    return (
        <div>
            <div class="hero min-h-screen mt-20"  style={{
            background: `url(${backgroudImage})`
        }} >
            <div class="hero-overlay bg-opacity-0"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="">
                <h1 class="mb-10 text-5xl font-bold">FOREEVER 21</h1>
                <h1 className="text-5xl mb-10">Big Fashion Festival</h1>
                <h1 className="text-4xl mb-10">70%-80% off</h1>
                <button class="rounded border border-white py-2 px-3">Explore</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BackgroundBanner;