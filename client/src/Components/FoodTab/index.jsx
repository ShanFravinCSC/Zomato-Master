import React, { useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoNutritionOutline, IoFastFoodOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";

const MobileTabs = () =>{
    const [allTypes, setallTypes] = useState([
        {
            id:`delivery`,
            icon:<RiShoppingBag3Line/>,
            name:"Delivery",
        },
        {
            id:`dining`,
            icon:<IoFastFoodOutline/>,
            name:"Dining out",
        },
        {
            id:`night`,
            icon:<BiDrink/>,
            name:"Nightlife",
        },
        {
            id:`nutri`,
            icon:<IoNutritionOutline/>,
            name:"Nutrition",
        },
    ]);
    const { type } = useParams();

    return(
        <>
            <div className ="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full md:justify-evenly flex items-center justify-between text-gray-500 border">
                {
                    allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                        <div className={type===items.id
                            ? "flex flex-col items-center relative text-xl text-zomato-400"
                            : "flex flex-col items-center text-xl"
                            }>
                            <div className={
                                type === items.id && "absolute -top-3 w-full hh-2 border-t-2 border-zomato-400"
                                }/>
                            {items.icon}
                        <h5 className="text-sm">
                            {items.name}
                        </h5>
                        </div>
                        </Link>
                    ))
                    
                }  
            </div>
        </>
    )
}

const LargeTabs = () =>{
    return(
        <>
            <div className="hidden lg:flex gap-14 container px-20 mx-auto items-center">
            <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 p-4 rounded-full"> 
                    <img 
                        src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                        alt="delivery"
                        className="w-full h-full"
                     />
                </div>
                <h3 className="text-xl text-gray-700 font-semibold">
                    Delivery
                </h3>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 p-4 rounded-full"> 
                    <img 
                        src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                        alt="dining out"
                        className="w-full h-full"
                     />
                </div>
                <h3 className="text-xl text-gray-700 font-semibold">
                    Dining out
                </h3>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 p-4 rounded-full"> 
                    <img 
                        src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                        alt="Nightlife"
                        className="w-full h-full"
                     />
                </div>
                <h3 className="text-xl text-gray-700 font-semibold">
                    Nightlife
                </h3>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 p-4 rounded-full"> 
                    <img 
                        src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                        alt="Nutrition"
                        className="w-full h-full"
                     />
                </div>
                <h3 className="text-xl text-gray-700 font-semibold">
                    Nutrition
                </h3>
                </div>
            </div>
        </>
    )
}


const FoodTab = () =>{
    return(
        <>
            <div>
                <MobileTabs/>
                <LargeTabs />
            </div>
        </>
    )
}

export default FoodTab;