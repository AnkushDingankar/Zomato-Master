import Express from "express";

import { OrderModel ,ReviewModel } from "../../Database/AllModels";

const Router = Express.Router();


/*
    Route   /new
    Des     Add new review
    Params  none
    Body    Review object
    Access  Public
    Method  

*/


Router.post("/new",async(req,res)=>{

    try {
            const {reviewData} = req.body;
            await ReviewModel.create(reviewData)
            res.json({review:"Review Sucessfully Created"});

    } catch (error) {
        return res.status(500).json({error:error.message}); 
    }

})

/*
    Route   /delete
    Des     delete a review
    Params  _id
    Access  Public
    Method  DELETE

*/


Router.delete("/delete/:_id",async(req,res)=>{

    try {
            const {_id} = req.params;

            await ReviewModel.findByIdAndDelete(_id);

            res.json({review:"Review Sucessfully Deleted"});

    } catch (error) {
        return res.status(500).json({error:error.message}); 
    }

})




export default Router;

