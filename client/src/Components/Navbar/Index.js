import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = () => {
    return(
        <>

        <div className="flex items-center justify-between w-full md:hidden">
        <div className="w-28">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full"/>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                        <span className="border p-2 border-blue-300 text-blue-400 rounded-full"><FaPizzaSlice/></span>
                    </div> 
        </div>
                         

        </>
    )
}

const NavLg = () => {
    return(
        <>
            <div className=" hidden lg:inline container px-20 mx-auto">
                <div className="hidden  w-full items-center justify-around lg:flex ">
                    <div className="w-28 ">
                         <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full"/>
                    </div>
                    {/* After Zomato logo*/}
                    <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
                            <div className="flex items-center items-center gap-2 border-r-2 border-gray-200 pr-2">
                                    <span className="text-zomato-400"> 
                                        <HiLocationMarker/>
                                    </span>

                                    <input type="text" placeholder="Mumbai NCR" className="focus:outline-none"/>
                                    <IoMdArrowDropdown/>
                            </div>
                            <div className="flex w-full items-center gap-2">
                                <RiSearch2Line/>
                                <input type="search" placeholder="Search for restaurant cusine or a dish" className="w-full focus:outline-none" />
                            </div>
                    </div>
                    <div className="flex gap-3">
                            <h2>Login</h2>
                            <h2>Signup</h2>
                    </div>
                </div>
            </div>

        </>
    )
}




 export const Navbar = () => {
     return (
         <div>
             <>
                <nav className="p-4 bg-white shadow-md lg:shadow-none w-full items-center">
                    <MobileNav/>
                    <NavLg/>
                </nav>
             </>
         </div>
     )
 }
 