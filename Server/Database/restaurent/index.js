import  Mongoose  from "mongoose";

const ReataurentSchema = Mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    mapLocation : {
        type:String,
        required:true
    },
    cuisine :[String],

    RestaurentTiming :String,

    contactNumber : Number,

    website : String,

    PopularDishes :[String],

    averageCost :Number,

    amenties :[String],

    MenuImage : {
        type:Mongoose.Types.ObjectId,
        ref :"Images"

    },

    Menu : {
        type:Mongoose.Types.ObjectId,
        ref:"Menus"
    },

    reviews : [ {
        type: Mongoose.Types.ObjectId,
        ref:"Reviews"
    }],

    photos : {
        type:Mongoose.Types.ObjectId,
        ref:"Images"
    }
    

},
{
    timestamps:true
})


export const RestaurantModel = Mongoose.model("Restaurants", ReataurentSchema); 