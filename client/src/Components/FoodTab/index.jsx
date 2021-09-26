import React, { useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoNutritionOutline, IoFastFoodOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import classnames from "classnames";

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
    const [allTypes, setallTypes] = useState([
        {
            id:`delivery`,
            default_image: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            active_image: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
            name:"Delivery",
            active_color: "yellow",
        },
        {
            id:`dining`,
            default_image: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            active_image: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name:"Dining out",
            active_color: "blue",
        },
        {
            id:`night`,
            default_image: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png", 
            active_image: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name:"Nightlife",
            active_color: "purple",
        },
        {
            id:`nutri`,
            default_image: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            active_image: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            name:"Nutrition",
            active_color: "ÿellow"
        },
    ]);
    const { type } = useParams();

    return(
        <>
            <div className="hidden lg:flex gap-14 container px-20 mx-auto my-8 items-center">
                
                {
                    allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                            <div className={classnames
                                            ("flex items-center gap-3 pb-2 transition duration-700 ease-in-out", 
                                            {"border-b-2 border-zomato-400" : type===items.id,})}>
                            
                            <div className={classnames("w-16 h-16 bg-gray-100 p-4 rounded-full", 
                                            {[`bg-${items.active_color}-100`]: type===items.id })}> 
                                <img 
                                src= { 
                                    type===items.id ? items.active_image : items.default_image }
                                    alt="delivery"
                                    className="w-full h-full"
                                />
                            </div>
                                <h3 className="text-xl text-gray-700 font-semibold">
                                    { items.name }
                                </h3>
                            </div>
                        </Link>
            ))}
                
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