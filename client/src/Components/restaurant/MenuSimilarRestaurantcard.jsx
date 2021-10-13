import React from 'react';
import { TiStar } from "react-icons/ti";

const MenuSimilarRestaurantcard = (props) => {
    return (
        <>
         <div className="mx-2">
         <div className="bg-white shadow rounded-md">
              <div className="w-full h-48">
                  <img src={props.image}
                    alt="Food"
                    className="w-full h-full object-cover rounded-t-md"
                  />
              </div>
              <div className="flex flex-col gap-2 p-3">
                <h3 className="font-semibold">
                   {props.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                        <span className="flex items-center gap-1 bg-green-700 text-white px-2 py-1 text-xs rounded">
                            30<TiStar />
                        </span>
                        Dining
                    </span>
                    <span className="w-2 h-4 border-r border-gray-500" />
                    <span className="flex items-center gap-1">
                        <span className="flex items-center gap-1 bg-green-700 text-white px-2 py-1 text-xs rounded">
                            30<TiStar />
                        </span>
                        Delivery
                    </span>
                </div>

                <h4>Chettinad, Biryani, Chinese</h4>
             </div>
         </div>
        </div>     
        </>
    )
}

export default MenuSimilarRestaurantcard;
