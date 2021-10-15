import React from 'react';
import { AiOutlineCompass, AiOutlineClockCircle } from "react-icons/ai";

//Component
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
           <div className="w-full h-screen flex">
               <aside className="hidden md:block w-1/4 border-r border-gray-200 h-screen overflow-y-scroll">
                    <MenuListContainer />
               </aside>
              <div className="w-full md:w-3/4 p-4">
                <h2 className="text-xl font-semibold mb-2 pl-3">
                    Order Online
                </h2>
                <div className="flex items-center gap-1 mb-4">
                    <h4 className="flex items-center gap-2 font-light text-gray-500"><AiOutlineCompass /> Live track your order | </h4>
                    <h4 className="flex items-center gap-2 font-light text-gray-500"><AiOutlineClockCircle /> 45 min</h4>
                </div>
                <section className="flex flex-col h-screen overflow-y-scroll gap-3 md:gap-8">
                    <FoodList
                        title="Recommended"
                        items ={[
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                        ]}
                        />
                        <FoodList
                        title="Pizza"
                        items ={[
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                            {
                                image : "https://b.zmtcdn.com/data/dish_photos/5b5/b5e8bb846b3618c5a853512677a735b5.jpg?fit=around|130:130&crop=130:130;*,*",
                                title :"Special Hyderabad Veg Biryani",
                                rating : 3,
                                price : "₹219",
                                description : "Chicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 mlChicken biryani -1pc, Chicken65 -6 pcs, soft drink 200 ml",
                            },
                        ]}
                        />
                        </section>
                        
              </div>
            </div> 
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline;
