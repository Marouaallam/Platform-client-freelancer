import { BsSearchHeart } from "react-icons/bs";
import React from "react";
export const Searchbar =()=>{
    return (
        <div>
            <form action="" className="relative mx-auto w-max">
                <BsSearchHeart  size={20} className="absolute right-3 top-3 text-black" />
                <input type="search" 
                className="relative  cursor-pointer  z-10 h-12 w-12 rounded-full border-0 bg-transparent pl-16 outline-none focus:w-full focus:cursor-text focus:bg-[#DAE0FF] focus:pl-6 focus:pr-4"
                placeholder="search..."/>
                
            </form>
            
        </div>
    )

}