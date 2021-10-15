import React from 'react';

//Components
import FoodItem from './FoodItem';

const FoodList = (props) => {
    return (
        <>
        <div>
            <h2 className="bg-white w-full px-2 py-1 z-10 sticky top-0 text-xl font-semibold mb-2 pl-3">
               {props.title}
            </h2>
            <div className="flex flex-col gap-3 md:gap-5">
            {props.items.map((item) => (
                <FoodItem {...item} />
            ))}
            </div>
        </div>  
        </>
    )
}

export default FoodList;
