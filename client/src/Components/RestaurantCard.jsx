import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-4 w-full mb-2 rounded-2xl transition duration-700 hover:shadow-lg md:w-1/2 lg:w-1/3">
                <div className="w-full h-56 lg:h-64 relative">
                   <div className="absolute bottom-4 w-full flex items-end justify-between">
                   <div className="flex flex-col gap-2 items-start">
                        {
                            props.isPro && (
                                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">{`${props.isPro}`}</span>
                            )
                        }
                       {
                           props.isOff && (
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{`${props.isOff}`}</span>
                           )
                       }
                    </div>
                    <div>
                        <span className="bg-white bg-opacity-80 p-1 rounded mr-3">{props.durationOfdelivery} min</span>
                    </div>
                   </div>
                    <img 
                        src={props.photos.length && props.photos[0]}
                        alt="food"
                        className="h-full w-full rounded-2xl"
                    />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex justify-between">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="flex items-center justify-between bg-green-800 text-white px-2 py-1 rounded text-sm">
                            {props.RestaurantReviewValue} <AiTwotoneStar/></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                        <p className="text-sm">{props.cuisine.join(", ")}</p>
                        <p>{props.averageCost}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard
