import Mongoose  from "mongoose";

import  bcrypt  from "bcryptjs";
import  jwt  from "jsonwebtoken";

const UserSchema = new Mongoose.Schema ({

    fullname: {type: String,require:true},
    email: {type:String,require:true},
    password :{type:String},
    address:[{detail:{type:String},for:{type:String}}],
    phoneno: [{type:Number}]

},
{
    timestamps:true
});

UserSchema.methods.generateJwtToken = function() {
   
    return jwt.sign({user:this._id.toString()}, "ZomatoApp");
};


UserSchema.statics.findEmailAndPhone =async ({email,phoneno}) => {

    //check whether the email exists
    const checkUserByEmail = await UserModel.findOne({email});
    //check whether the phoneno exists
    const checkUserByPhone = await UserModel.findOne({phoneno});

    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User Already Exists");
    }
    return false;

};

UserSchema.statics.findByEmailAndPassword =async ({email,password}) => {

    //check whether the email exists
    const user = await UserModel.findOne({email});

          //user  error
              if(!user) {
                throw new Error("User doesnt exist");
              }

    //compare passwords
    const doesPasswordMatch = await bcrypt.compare(password,user.password)

    if(!doesPasswordMatch){
        throw new Error("Invalid User");
    }
    return user;

};

UserSchema.pre("save",function(next){

    const user = this;
    //Password is not Modified
    if(!user.isModified("password")) return next();

    //Genrating bcrypt salt
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);

        //hashing the password
        bcrypt.hash(user.password,salt,(error,hash)=>{
            if(error) return next(error);

            //Assigning hashed password to user
            user.password = hash;
            return next();
        })
    })
});



export const UserModel = Mongoose.model("Users",UserSchema);

