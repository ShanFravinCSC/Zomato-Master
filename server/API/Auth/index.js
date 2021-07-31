//Library
import express from "express";
//import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user"

//Initializing Router
const Router = express.Router();

/*
Route   /signup
des     Register New User
params   none
Access   public
method   POST
*/

Router.post("/signup", async(req, res) => {
    try{
        await UserModel.findByEmailAndPhone(req.body.credentials);

       const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "success"});

    }   catch(error){
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /signin
des     Sign in using email and password
params   none
Access   public
method   POST
*/

export default Router;