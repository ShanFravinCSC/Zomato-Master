import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";



//Component
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import InfoButtons from '../Components/restaurant/InfoButtons';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-20">
          <ImageGrid images={[
              "https://b.zmtcdn.com/data/pictures/chains/0/18683480/502a318d8adf3b2e9689ddef45594510_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
              "https://b.zmtcdn.com/data/pictures/chains/0/18683480/502a318d8adf3b2e9689ddef45594510_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
              "https://b.zmtcdn.com/data/pictures/chains/0/18683480/502a318d8adf3b2e9689ddef45594510_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
              "https://b.zmtcdn.com/data/pictures/chains/0/18683480/502a318d8adf3b2e9689ddef45594510_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
              "https://b.zmtcdn.com/data/pictures/chains/0/18683480/502a318d8adf3b2e9689ddef45594510_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ]}
          />
            <RestaurantInfo 
                name="Mumbai Xpress" 
                restaurantRating="3.5" 
                deliveryRating="3.8" 
                cuisine="Biryani, Andhra, North Indian, Chinese, Beverages, Desserts, South Indian"
                address="Indiranagar, Bangalore"
            />
           
           <div className="my-4 flex flex-wrap gap-3">
               <InfoButtons isActive>
                   <TiStarOutline/> Add Review
               </InfoButtons>
               <InfoButtons>
                   <RiDirectionLine /> Direction
               </InfoButtons>
               <InfoButtons>
                   <BiBookmarkPlus /> Bookmark
               </InfoButtons>
               <InfoButtons>
                   <RiShareForwardLine /> Share
               </InfoButtons>
           </div>
        </div>
          
        </>
    )
}

export default RestaurantLayout;