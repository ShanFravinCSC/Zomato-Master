import React from 'react';
import Slider from "react-slick";

//component
import DeliveryCategory from "./DeliveyCategory";
import { NextArrow, PrevArrow } from '../CarouselArrow';


const DeliveryCarousel = () => {
    const categories = [{
        image: "https://b.zmtcdn.com/data/pictures/chains/2/19516482/a34c29604492a3b5e584e1e291c28010_o2_featured_v2.jpg?output-format=webp",
        title: "Chandni Chawk",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/3/60453/11a09cd0b3d5c01ea5d5208f0d9fe41c_o2_featured_v2.jpg?output-format=webp",
        title: "Freshmenu",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/1/60551/5175748d41698e6eab456034fddc99b5_o2_featured_v2.jpg?output-format=webp",
        title: "Leon grill"
    },
    {
        image:"https://b.zmtcdn.com/data/pictures/chains/4/50674/924d6db7dee0bb80abc31170174d0df6_o2_featured_v2.jpg",
        title: "McDonalds",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/8/54308/d819367274f45b263a6d85418b1e3549_o2_featured_v2.jpg",
        title: "fasoos",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/0/50310/93ad38f28100300adf4a4f1a37b5dd20_o2_featured_v2.jpg",
        title: "Ice creams",
    }
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return (
        <>
            <div>
                <h1 className="text-xl font-bold mb-4">Inspiration for your first order</h1>
                <div className="lg:hidden flex gap-2 lg:gap-0 flex-wrap justify-between">
                    {
                        categories.map((food) => (
                            <DeliveryCategory {...food}/>
                        ))
                    }               
                </div>
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                {
                        categories.map((food) => (
                            <DeliveryCategory {...food}/>
                        ))
                    }     
                </Slider>
            </div>
        </>
    )
}
export default DeliveryCarousel;
