import React from 'react';
import img1 from '../../../assets/images/banner/Banner1.jpg';
import img2 from '../../../assets/images/banner/Banner2.jpg';
import img3 from '../../../assets/images/banner/Banner3.jpg';
// import img4 from '../../../assets/images/banner/Banner4.jpg';
// import img5 from '../../../assets/images/banner/5.jpg';
// import img6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://previews.123rf.com/images/hugsid/hugsid2007/hugsid200700013/151651699-fast-delivery-by-scooter-on-mobile-e-commerce-concept-online-food-order-infographic-app-design-blue-.jpg",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://media.istockphoto.com/vectors/delivery-man-with-box-postman-design-isolated-on-white-background-vector-id958272416",
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: "https://previews.123rf.com/images/yayasyaya/yayasyaya2001/yayasyaya200100001/137066419-online-delivery-service-by-scooter-shopping-website-on-a-mobile-food-order-concept-web-banner-app-te.jpg",
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }

        </div>
    );
};

export default Banner;