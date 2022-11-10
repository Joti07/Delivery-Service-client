import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-1/2">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute d-flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    ONLINE <br />
                    DELIVERY <br />
                    SERVICE
                </h1>
                <h3 className='text-2xl font-bold text-white my-5 '>You Stay At Home, I will deliver</h3>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white'>On-demand delivery :
                    Aim is to make moving things from one place to another easy, fast and affordable</p>
            </div>
            {/* <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div> */}
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;