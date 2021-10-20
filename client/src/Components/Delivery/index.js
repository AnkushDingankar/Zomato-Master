import React,{useState,useEffect} from "react";

import { useSelector } from "react-redux";

//component
import { DeliveryCarusal } from "./DeliveryCarusal";

const Delicery = () => {
    const [restaurantList,setRestaurantList] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants

    );
    
    useEffect(() => {
        setRestaurantList(reduxState.restaurants)
    }, [reduxState.restaurants])
    return (
        <>
            <DeliveryCarusal/>
        </>
    )
}

export default Delicery;