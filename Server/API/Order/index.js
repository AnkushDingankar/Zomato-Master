import Express from "express";
import passport from "passport";

import { OrderModel } from "../../Database/AllModels";

const Router = Express.Router();

//Validation :-

import { validateOrderId } from "../../Validation/Order";

/*
    Route   /
    Des     Get all orders based of id 
    Params  _id
    Access  Public
    Method  Get

*/

Router.get("/:_id",passport.authenticate("jwt",{session:false}),async(req,res)=>{

    try {
        await validateOrderId(req.params);
        const {_id} = req.params;
        const getOrders = await OrderModel.findOne({user:_id}) ;
        if(!getOrders){
            return res.status(404).json({error:"User not Found"});
        }

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

/*
    Route   /new
    Des     Adding  new orders
    Params  _id
    Access  Public
    Method  POSt

*/

Router.post("/new/:_id",async(req,res)=>{

    try {
        await validateOrderId(req.params)
        const{_id} = req.params;
        const{orderDetails} = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
              user: _id
            },
            {
              $push: {orderDetailes : orderDetails}
            },
            {
              new: true
            }
          );
        return res.json({order : addNewOrder});
    } catch (error) {
        return res.status(500).json({error:error.message}); 
    }

})



export default Router;

