import React from 'react'

import { useParams } from "react-router-dom";

//component
import  Delivery  from "./Delivery";

export const Master = () => {
    const {type} = useParams();
    return (
        <>
        <div className ="m-4">
            {type === "delivery" && <Delivery/>} 
        </div>  
        </>
    )
}
