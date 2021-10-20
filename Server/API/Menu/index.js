//libraries :-
import Express from "express";

//DataModel :-
import { MenuModel, ImageModel} from "../../Database/AllModels";

const Router = Express.Router();


//Validation :
import { validateMenuId ,validateMenuImageId } from "../../Validation/Menu";

/*
    Route   /list
    Des     Get  the list of menu based on menu 
    Params  _id
    Access  Public
    Method  Get

*/

Router.get("/list/:_id",async(req,res) =>{
    try {
        await validateMenuId(req.params);
        const {_id} = req.params;

        const Menu = await MenuModel.findOne({_id})
        return res.json({Menu})
        
    } catch (error) {
        return res.status(500).json({error:error.message});      
    }
})


/*
    Route   /image
    Des     Get  the Menu image based on id 
    Params  _id
    Access  Public
    Method  Get

*/
Router.get("/image/:_id",async(req,res)=>{
    try {

        await validateMenuImageId(req.params);
        const {_id} = req.params;
        const Menu = await ImageModel.findOne({_id});

        return res.json({Menu});

    } catch (error) {
        return res.status(500).json({error:error.message});  
        
    }
})

export default Router;