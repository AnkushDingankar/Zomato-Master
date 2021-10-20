import  {combineReducers}  from "redux";

import restaurant from "./Restaurant/Resaturant.reducer";

const rootReducer = combineReducers({restaurant});

export default rootReducer;