import { SideBar } from "../components/sideBar.jsx"
import userpic from "../assets/Userpic.png"
import * as React from "react"
import ProfileCategories from "../components/profilecategorie.jsx"
import { Comments } from "../components/comments.jsx"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";


export const Profile =({}) =>{
    
    return (
        <div className="" >
            <div className="grid">
              <SideBar />  
            </div>
             <div className=" flex ml-52 mt-16  ">
                <div className="ml-8 p-4 h-72 w-64 border rounded-md bg-[#f6f8ff85]  ">
                    <img src={userpic} className='w-24 h-24 mx-auto '/>
                   
                    <div className="text-center font-bold my-3">allam maroua</div>
                    <div className="text-center text-[#647DFF] mb-2 ">Freelancer</div>
                    <div className="text-center text-[8px] text-slate-400">I'm a experienced web developer. Not only websites I develop desktop applications and mobile applications for Android OS. My aim is to deliver high quality products for my clients.
                    </div>
                    <button className=" ml-6 mt-3 py-1 px-8 bg-[#647DFF]  rounded text-white">Change Avatar</button>


                </div>
                <div className=" ml-8 p-10 h-72 w-[500px] border rounded-md bg-[#f6f8ff85]">
                    <div className="font-bold">Basic info</div>
                    <div className="py-2">Email</div>
                    <div className="">Password</div>
                    <div className="pt-4 pb-2 font-bold">Career</div>
                    <div className="flex gap-6">
                        <p>6 Jobs</p>
                        <p>$17.00</p>
                        <p>5.3 rating</p>
                    </div>
                </div>
             </div>
             <div  className="flex ml-64 mt-8 text-2xl font-bold">
             My gigs
             </div>
             <div className="ml-24 mt-6 ">
                <div className=" ">
                <div>
                <ProfileCategories />
                </div>
                
                </div>
            </div>
            <div className="flex ml-64 mt-16 ">
                comments
                <Comments />
            </div>
        </div>
    )    
}
