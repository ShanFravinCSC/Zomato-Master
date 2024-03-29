//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { RestaurantModel } from "../../database/allModels";

//Router setup
const Router = express.Router();

//Validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../Validation/restaurant";
import { ValidateRestaurantId } from "../../Validation/food";

/*
Route   /
des     Get all the restaurants
params   none
Access   Public
method   GET
*/

Router.get("/", async (req, res) => {
    try{
        await ValidateRestaurantCity(req.query);

        const { city } = req.query;
        const restaurants = await RestaurantModel.find ({ city });

        return res.json({ restaurants });
    }catch(error){
        return res.status(500).json({ error: errormessage })
    }
});

/*
Route   /
des     Get individual restaurant details based on id
params   id
Access   Public
method   GET
*/

Router.get("/:_id", async (req, res) => {
    try{
        await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if (!restaurant) 
         return res.status(404).json({ error: "Restaurant not found" });

        return res.json({ restaurant });
    }catch(error){
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /search
des     Get restaurant details based on search string
params   none
body     search string
Access   Public
method   GET
*/

Router.get("/search", async (req, res) => {
    
    try{
        
        await ValidateRestaurantSearchString(req.body);
        const { searchString } = req.body;

        const restaurants = await RestaurantModel.find({ 
            name:{ $regex: searchString, $options: "i" },
        });
        if(!restaurants) 
            return res.status(404).json({ error: `No Restaurant matched with ${searchString}`});
        
        return res.json({ restaurants });

    }catch(error){
        return res.status(500).json({ error: error.message });
    }
});

export default Router;