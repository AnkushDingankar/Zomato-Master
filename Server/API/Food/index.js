import Express from "express";
import passport from "passport";

//Database Model:-
import { FoodModel } from "../../Database/AllModels";

const Router = Express.Router();

//Validation

import {validateRestaurantId, validateCategory } from "../../Validation/Food";

/*
    Route   /
    Des     Get all the food based on particular reastaurant 
    Params  _id
    Access  Public
    Method  Get

*/

Router.get("/:_id",async(req,res)=>{
    try {
        
        await validateRestaurantId(req.params);
        const {_id} = req.params;
        const Foods = await FoodModel.find({restaurant: _id})
        return res.json({Foods});
        
    } catch (error) {

        return res.status(500).json({error:error.message});
        
    }
})


/*
    Route   /r
    Des     Get all the food based on particular category 
    Params  category
    Access  Public
    Method  Get

*/

Router.get("/r/:category",async(req,res) =>{
    try {
        await validateCategory(req.params);
        
        const {category} = req.params;
        const Foods = await FoodModel.find({
           category:{$regex:category,$options:"i"} 
        })

        return res.json({Foods})
    } catch (error) {
        return res.status(500).json({error:error.message});
    }

})


export default Router;