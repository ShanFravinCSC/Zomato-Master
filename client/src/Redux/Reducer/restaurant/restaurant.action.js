import axios from "axios";

//Redux Types
import { GET_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async(dispatch) => {
    try{
        const restaurantList = await axios({
            method:"GET",
            url:"http://localhost:4003/restaurant/?city=bangalore"
        });

        return dispatch({ type:GET_RESTAURANT, payload:restaurantList.data});
    }catch(error){
        return dispatch({ type:"Error", payload:error });
}
};