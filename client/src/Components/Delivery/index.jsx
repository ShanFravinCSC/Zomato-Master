import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
  const [restaurantlist, setRestaurantlist] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);

  useEffect(() => {
    reduxState.restaurants && setRestaurantlist(reduxState.restaurants)
  }, [reduxState.restaurants]);
  
    return (
        <>
          <div><DeliveryCarousel/></div>  
          <div>{/*<Brand />*/}</div>
          <div className="flex justify-between flex-wrap">
            {
              restaurantlist.map((restaurant) =>(
                <RestaurantCard {...restaurant}/>
              ))
            }
          </div>
        </>
    )
}

export default Delivery;
