import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";


const MobNavbar = () =>{
    return(
        <div className="flex w-full items-center justify-between md:hidden">
            <div className = "w-28">
                    <img src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                        alt = "logo"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                    <span className="border p-2 border-gray-400 rounded-full text-zomato-400">
                        <FaUserAlt/>
                    </span>
                </div>
        </div>
    )
}

const MediumNav = () =>{
    return(
        <>
            <div className="hidden md:flex items-center gap-4 w-full lg:w-3/4">
                <div className = "w-28">
                    <img src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                        alt = "logo"
                    />
                </div>
                <div className="w-full bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-300">
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder="Colombo" className="w-full focus:outline-none"/>
                        <span>
                            <IoMdArrowDropdown />
                        </span>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <span>
                            <RiSearch2Line />
                        </span>
                        <input 
                            type="search" 
                            placeholder="Search for restaurant, cuisine or a dish" 
                            className="w-full focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className = "text-gray-500 hover:text-gray-800 text-xl">Login</button>
                    <button className = "text-gray-500 hover:text-gray-800 text-xl">Signup</button>
                </div>
            </div>
        </>
    )
}

const Navbar = () =>{
    return(
        <>
            <nav className="p-4 flex bg-white shadow-md w-full items-center">
                    <MobNavbar />
                    <MediumNav />
            </nav>
        </>
    )
}

export default Navbar;