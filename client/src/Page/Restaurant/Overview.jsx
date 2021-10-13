import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarouselArrow';


//Component
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/restaurant/MenuSimilarRestaurantcard';

const Overview = () => {
    const { id } = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    return (
        <>
         <div className="flex flex-col md:flex-row relative">
             <div className="w-full">
                 <h2 className="font-semi-bold text-lg md:text-xl my-4">
                    About This Place
                 </h2>
                 <div className="flex justify-between items-center">
                     <h4 className="text-lg font-medium">Menu</h4>
                     <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-1 text-zomato-400">
                            see all menus <IoMdArrowDropright/>
                        </span>
                     </Link>
                     
                 </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection
                            menuTitle="Menu" 
                            pages="3" 
                            image="https://b.zmtcdn.com/data/menus/511/54511/e5dfa5f2d488a901217928f2d18c73b7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                        />
                     </div>
                     <h4 className="text-lg font-medium my-4">Cuisines</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">South Indian</span>
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Andhra</span>
                        </div>
                       <div className="my-4">
                            <h4 className="text-lg font-medium">Average Cost</h4>
                            <h6>₹1,000 for two people (approx.)</h6>
                            <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                       </div>

                       <div className="my-4">
                           <h4 className="text-lg font-medium">Similar Restaurants</h4>
                           <Slider {...settings}>
                             <MenuSimilarRestaurantcard 
                              image="https://b.zmtcdn.com/data/pictures/chains/5/50045/f20767c3f63ceac6ebcf40d4813410d4_featured_v2.jpg?output-format=webp"
                              title="Anjappar"
                            />
                           </Slider>
                       </div>
             </div>
             <aside 
                style={{ height: "fit-content" }}
                className="hidden md:block md:w-2/5 sticky bg-white p-3 shadow-xl"></aside>
        </div>  
        </>
    )
}

export default Overview;
