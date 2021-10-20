import { GET_RESTAURANT } from "./Restaurant.type";

const INITAL_STATE = {
    restaurants :[]

}

const restaurantReducer = (state=INITAL_STATE,action) => {
    switch(action.type){
        case GET_RESTAURANT:
            return{
                ...state,
                restaurants: action.payload
            };

            default:
                return{
                    ...state
                }
    }
}

export default restaurantReducer;