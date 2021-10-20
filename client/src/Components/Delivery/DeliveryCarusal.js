import React from 'react'
import { DeliveryFoodCategory } from "./DeliveryFoodCategory";
export const DeliveryCarusal = () => {
    return (
        <>
            <h1 className="text-xl font-semibold my-3" >Eat what makes you Happy</h1> 
            <div className="flex flex-wrap justify-between gap-3">
                <DeliveryFoodCategory/>  
                <DeliveryFoodCategory/>  
                <DeliveryFoodCategory/>  
                <DeliveryFoodCategory/>  
                <DeliveryFoodCategory/> 
                <DeliveryFoodCategory/> 
            </div>
        </>
    )
}
