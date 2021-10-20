import React ,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Components
import { Navbar} from "../Components/Navbar/Index";
import FoodTab from "../Components/FoodTabs/index"

//Redux Action
import  getRestaurant  from "../Redux/Reducer/Restaurant/Restaurant.action";


export const HomeLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, [])
    
    return (
        <>
        <div className="container mx-auto  lg:px-20">
            <Navbar/>
           <div>{props.children}</div> 
           <FoodTab/>
        </div>
        </>
    )
}

