import React from 'react';
import { TiStarFullOutline } from "react-icons/ti"

const reviewCard = () => {
    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                   <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full">
                        <img src="https://b.zmtcdn.com/data/user_profile_pictures/ffb/c72590bc8e07af68b0b7c22b67d87ffb.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                            alt="avatar" 
                            className="w-full h-full rounded-full object-cover"
                        />
                   </div>
                   <div className="flex flex-col">
                       <h3 className="text-lg font-semibold">Shan Fravin</h3>
                       <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                   </div>
                   </div>
                   <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">
                       Follow
                   </button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center">
                            3 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                        For all those times you've got yourself an Andhra meal to your home or office, 
                        and had to eat on a plate instead of a banana leaf, SAY NO MORE now ! Nandhana Palace has you covered. 
                        Their Carrier Meal Box has all the goodness of an Andhra vegetarian meal along with the banana leaf. 
                        Yes, you get banana leaves to eat your meal just like how you'd do at the restaurant.

                        The meal box comes with enough to feed three people easily. Four, 
                        if you ration out the sambhar, 
                        rasam, and pappu (dal) a bit meagrely. But then again pappu is ULTIMATE, 
                        so you will probably eat the whole meal by yourself, just for that. 
                        The meal box comes with white rice (loads of it), a Thalimpu (dry vegetable), 
                        rasam, sambar, curd, payasam (sweet dish), papad, ghee, podi, pickle, and chutney. 
                        It's quite satisfying, filling and delicious. But be warned, 
                        you'll probably need a nap afterwards. Don't schedule meetings for a while after this!
                        </p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default reviewCard;
