import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { IoIosAdd } from "react-icons/io"

const FoodItem = (props) => {
    return (
        <>
            <div className="flex items-start gap-2 md:justify-between">
                <div className="w-2/12 h-24 md:h-28 lg:h-30 md:px-3">
                    <img src={props.image}
                        alt="food"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-3/4 md:w-3/6 md:-ml-22 lg:-ml-24 flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-1">
                        <h3 className="text-xl font-semibold">{props.title}</h3>
                        <button className="md:hidden text-zomato-500 bg-zomato-50 border border-zomato-500 rounded-lg px-4 py-2 flex items-center gap-2">
                            ADD <IoIosAdd />
                        </button>
                    </div>
                    <ReactStars count={5} value={props.rating} />
                    <h5>{props.price}</h5>
                    <p className="truncate">
                        {props.description}
                    </p>
                </div>
                <div className="hidden md:block 3/12">
                    <button className="text-zomato-500 bg-zomato-50 border border-zomato-500 rounded-lg px-4 py-2 flex items-center gap-2">
                        ADD <IoIosAdd />
                    </button>
                </div>
            </div>
        </>
    )
}

export default FoodItem;
