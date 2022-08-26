import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";


const CheckoutNavbar = () =>{
    return(
        <>
            <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
               <div className="container px-4 md:px-20 mx-auto">
               <div className="flex w-full items-center justify-between ">
                <AiOutlineArrowLeft />
                <div className = "w-28">
                    <img 
                        src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                        alt = "logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex items-center gap-3 relative">
                    <span className="border p-2 flex items-center gap-2 border-gray-400 rounded-full text-zomato-400">
                        <FaUserAlt/> 
                    </span>
                    Shan
                </div>
                </div>
               </div>
            </nav>
        </>
    )
}

export default CheckoutNavbar;