//env
require("dotenv").config();

import  Express  from "express";
import cors from "cors";
import helmet from "helmet";
import { urlencoded } from "body-parser";
//import passport from "passport";

//config 
import googleAuthConfig from "./config/google.config";

import routeConfig from "./config/route.config";

const zomato = Express();

//Database Connection
import  ConnectDB  from "./Database/Connection";

//import API
//localhost:5000/Auth/signup
import  Auth  from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import image from "./API/image";
import Order from "./API/Order";
import Review from "./API/reviews";
import passport from "passport";



zomato.use(Express.json());
zomato.use(Express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use("/Auth",Auth);
zomato.use(passport.initialize());
zomato.use(passport.session());
zomato.use("/restaurant",Restaurant);
zomato.use("/Food",Food);
zomato.use("/Menu",Menu);
zomato.use("/image",image);
zomato.use("/Order",Order);
zomato.use("/Review",Review)


//passport Configuration

googleAuthConfig(passport);
routeConfig(passport);



zomato.get("/",(req,res) => 
    res.json({message:"setup complete"}
    ))

zomato.listen(5000,()=>
ConnectDB().then(()=>console.log("server is up and running"))
.catch(()=>console.log("DB connection is failed"))
);

