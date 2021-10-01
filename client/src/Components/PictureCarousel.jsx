import React from 'react';
import { IoMdArrowDropright } from "react-icons/io"

const PictureCarouselCard = () => {
    return (
        <>
            <div className="w-full h-64 relative px-4 overflow-hidden">
                <div className="h-full w-full relative">
                <img src="https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg" 
                    alt="food"
                    className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg" 
                />
            <div 
                className="w-full h-full absolute inset-0 bottom-0 rounded-lg"
                style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                }}
            />

            </div>

            <div className="absolute w-full left-4 bottom-2 text-white">

                <h4>Live Sports Screenings</h4>
                <h6 className="flex items-center">12 Places <IoMdArrowDropright /></h6>
            </div>
        </div>

        </>
    )
}

export default PictureCarouselCard;
