import  Express  from "express";
import passport from "passport";
import  bcrypt  from "bcryptjs";

//jwt
import  Jwt  from "jsonwebtoken";
const Router =Express.Router();

//Models
import  {UserModel}  from "../../Database/user";
//import passport from "passport";

//Validation
import { validationSignup,validationSign } from "../../Validation/auth";


/*
Route : /Signup
Descrp : Signup with email and password
Params :None
Access : Public
Method :- POST
*/

Router.post("/signup",async(req,res) => {

    try {

        await  validationSignup(req.body.credentials);
        
       // const {email,phoneNumber} = req.body.credentials;

            await UserModel.findEmailAndPhone(

                req.body.credentials

            );

        //hashing and Salting
    
        //DB
        const newUser =await UserModel.create(req.body.credentials);

        //JWT Auth Token :-\
        const token = newUser.generateJwtToken();

        return res.status(200).json({token});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route : /Signin
Descrp : Signin with email and password
Params :None
Access : Public
Method :- POST
*/

Router.post("/signin",async(req,res) => {

    try {
        
       // const {email,phoneNumber} = req.body.credentials;
       await  validationSign(req.body.credentials);

          const user = await UserModel.findByEmailAndPassword( req.body.credentials);
        
        //JWT Auth Token :-\
        const token = user.generateJwtToken();

        return res.status(200).json({token,status:"Success"});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route : /google
Descrp : Google Sigining
Params :None
Access : Public
Method :- GET
*/


Router.get("/google",passport.authenticate("google",{
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ],
 
 })
)

/*
Route : /google/callback
Descrp : Google Sigining callback
Params :None
Access : Public
Method :- GET
*/

Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
(req,res) => {
    return res.json({token: req.session.passport.user.token})
}
)




export default Router;
