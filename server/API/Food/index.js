//Libraries
import express from "express";
import passport from "passport";

//Database Model 
import { FoodModel } from "../../database/food";

//Router Setup
const Router = express.Router();

/*
Route   /r
des     Get all food based on particular restaurant
params   id
Access   Public
method   GET
*/

Router.get("/r/:_id", async (req, res) => {
    try{
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });
    }catch(error) {
       return res.status(500).json({ error: error.message });
    }
});

/*
Route   /c
des     Get all food based on particular category
params   category
Access   Public
method   GET
*/

Router.get("/c/category", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await FoodModel.find({ 
        category: { $rejex: category, $options: "i"},
    });

        return res.json({ foods });
    }catch(error){
        return res.status(500).json({ error: error.message });
    }
});