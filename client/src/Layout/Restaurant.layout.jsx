import React from 'react';


//Component
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';

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
          ]}/>
        </div>
        </>
    )
}

export default RestaurantLayout;