import { RestaurantModel } from "../../Database/AllModels";
import  Express  from "express";
const Router = Express.Router();

//validation

import {validateRestaurantCity,validateRestaurantSearchString, validateRestaurantId } from "../../Validation/restaurant";


/*
    Route   /
    Des     Get all reastaurant detailes
    Params  None
    Access  Public
    Method  Get

*/

Router.get("/",async(req,res) =>{
    try {
            await validateRestaurantCity(req.query)

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }

})

/*
    Route   /
    Des     Get particular reastaurant details on id
    Params  id
    Access  Public
    Method  Get

*/

Router.get("/:_id",async(req,res) => {
try {
     await validateRestaurantId(req.params);
    const { _id } = req.params;
    const restaurant= await RestaurantModel.findOne(_id);
    if(!restaurant){
        res.status(404).json({error:"Restaurant not found"})
    }
    return res.json({restaurant});
} catch (error) {
    return res.status(500).json({error :error.message})
}
})

/*
    Route   /
    Des     Get  reastaurant details on seacrch
    Params  none
    Body    Search String
    Access  Public
    Method  Get

*/

Router.get("/search",async(req,res)=>{
    try {

        await validateRestaurantSearchString(req.body);
        const {searchString} = req.body;

        const restaurants = await RestaurantModel.find({
            name:{$regex:searchString, $options:"i"},
        })

        return res.json({restaurants})
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

export default Router;