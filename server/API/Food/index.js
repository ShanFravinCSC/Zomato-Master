//Libraries
import express from "express";
import passport from "passport";

//Database Model 
import { FoodModel } from "../../database/food";

//Router Setup
const Router = express.Router();

/*
Route   /
des     Get individual restaurant details based on id
params   id
Access   Public
method   GET
*/