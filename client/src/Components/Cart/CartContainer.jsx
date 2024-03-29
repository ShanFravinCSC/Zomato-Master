import React, {useState} from "react"
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright, IoMdClose } from "react-icons/io"


//components
import FoodItem from "./FoodItem" 

const CartSM = ({ toggle }) => {
    return(
        <>
            <div className="md:hidden flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <small className="flex items-center gap-1" onClick={toggle}>
                    1 Item <IoMdArrowDropdown/>
                    </small>
                    <h4>
                    ₹300 <sub>(plus tax)</sub>
                    </h4>
                </div>
                    <button className="flex items-center gap-1 bg-zomato-400 text-white px-3 py-1 rounded-lg">
                        Continue <IoMdArrowDropright/>
                    </button>
            </div>
        </>
    )
}


const CartLg = ({ toggle }) => {
    return(
        <>
            <div className="hidden md:flex items-center justify-between container px-20 mx-auto">
                <div className="flex gap-2 text-xl items-start">
                    <span className="border border-gray-300 bg-white p-1 rounded" onClick={toggle}>
                     <IoMdArrowDropup/>
                    </span>
                    <h4>
                    Your Orders (1)
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-lg">
                    SubTotal:₹300
                    </h4>
                    <button className="flex items-center text-lg font-light h-10s gap-1 bg-zomato-400 text-white px-3 py-1 rounded-lg">
                        Continue <IoMdArrowDropright/>
                    </button>
                </div>
            </div>
        </>
    )
}

const CartContainer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => setIsOpen((prev) => !prev);

    const closeCart = () => setIsOpen(false);

  return( 
    
    <>
        {isOpen && (
        <div className= "fixed w-full h-48 overflow-y-scroll bg-white z-10 p-2 bottom-14 px-3">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Your Orders</h3>
                <IoMdClose onClick={closeCart}/>
            </div>
            <hr className="my-2"/>

            <div className="flex flex-col gap-2">
                <FoodItem name="Pizza" quantity="3" price="300"/>
                <FoodItem name="Pizza" quantity="3" price="300"/>
                <FoodItem name="Pizza" quantity="3" price="300"/>
                <FoodItem name="Pizza" quantity="3" price="300"/>
            </div>
        </div>
        )}
        <div className= "fixed w-full bg-white z-10 p-2 bottom-0">
           <CartSM toggle={toggleCart}/>
           <CartLg toggle={toggleCart}/>
        </div>
    </>
  );
};

export default CartContainer;