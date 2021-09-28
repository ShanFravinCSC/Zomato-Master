import React, { useState } from 'react';

import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
  const [restaurantlist, setRestaurantlist] = useState([
    {
      _id: "12345",
      photos: "https://b.zmtcdn.com/data/pictures/3/60453/11a09cd0b3d5c01ea5d5208f0d9fe41c_o2_featured_v2.jpg?output-format=webp",
      name: "Leon Grill",
      cuisine: ["Burger", "Wraps", "Fast Food", "Beverages"],
      RestaurantReviewValue: 4.1,
      averageCost: 350,
      isPro: true,
      isOff:80,
      durationdelivery:47
    },
    {
      _id: "12345",
      photos: "https://b.zmtcdn.com/data/pictures/chains/2/19516482/a34c29604492a3b5e584e1e291c28010_o2_featured_v2.jpg?output-format=webp",
      name: "Leon Grill",
      cuisine: ["Burger", "Wraps", "Fast Food", "Beverages"],
      RestaurantReviewValue: 4.1,
      averageCost: 350,
      isPro: true,
      isOff:80,
      durationdelivery:47
    },
    {
      _id: "12345",
      photos: "https://b.zmtcdn.com/data/pictures/chains/2/19516482/a34c29604492a3b5e584e1e291c28010_o2_featured_v2.jpg?output-format=webp",
      name: "Leon Grill",
      cuisine: ["Burger", "Wraps", "Fast Food", "Beverages"],
      RestaurantReviewValue: 4.1,
      averageCost: 350,
      isPro: true,
      isOff:80,
      durationdelivery:47
    },


  ]);
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
