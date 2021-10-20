import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import  rootReducer  from "./Reducer/rootReducer";


const middlweares = [thunk];

if(process.env.Node_ENV == "development"){
    const{logger} = require("redux-logger")
    middlweares.push(logger);
}

const store = createStore(rootReducer,{},applyMiddleware(...middlweares));





export default store;