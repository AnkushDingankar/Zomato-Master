import passport from "passport";
import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../Database/AllModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({

            clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECREAT,
            callbackURL:"http://localhost:4000/auth/google/callback"
        },
        async(accessToken , refreshToken ,profile, done) =>{
            //creating a new User
            const newUser ={
                fullname:profile.displayName,
                email:profile.emails[0].value,
                profilePic:profile.photos[0].value
            };
            try {
                //check whether user exists or not
                const user = await UserModel.findOne({email:newUser.email})


                if(user){

                    //Genreate Token
                    const token = user.generateJwtToken();
                    //return User
                    done(null,{user,token});
                     
                }
                else{
                    //create a new User
                    const user = await UserModel.create(newUser);

                    //Genreate Token
                    const token = user.generateJwtToken();

                    //return user
                    done(null,{user,token});
                }
                
            } catch (error) {
                done(error,null);
                
            }
        }
        )
    );
        passport.serializeUser((userData,done) => done(null,{...userData} ));
        passport.deserializeUser((id,done) => done(null,id));

}