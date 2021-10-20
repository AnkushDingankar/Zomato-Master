import Express from "express";

import {UserModel } from "../../Database/AllModels";

const Router = Express.Router();


/*
    Route   /_id
    Des     Get a user Data
    Params  _id
    Body    none
    Access  Public
    Method  GET

*/


Router.get("/:_id",async(req,res)=>{

    try {
            const{_id} = req.params;
            const getUser = await UserModel.findById(_id);

            return res.json({user:getUser});

    } catch (error) {
        return res.status(500).json({error:error.message}); 
    }

})

/*
    Route   /update
    Des     update an user data
    Params  _userId
    Body    user Data
    Access  Public
    Method  PUT

*/

Router.put("/update/:_userId",async(req,res)=>{

    try {
            const{userId} = req.params;
            const{userData} =req.body;
            const updateUserData = await UserModel.findByIdAndUpdate(
                userId,
                {
                    $set: userData
                },
                {
                    new:true
                }
            )

            return res.json({user:updateUserData});

    } catch (error) {
        return res.status(500).json({error:error.message}); 
    }

})


export default Router;

