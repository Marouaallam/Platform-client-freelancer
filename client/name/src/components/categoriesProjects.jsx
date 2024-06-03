import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { SideBar } from '@/components/sideBar';


export const Uigigs=() =>{
  const userID = window.localStorage.getItem("userID");
   
      const [cards, setCards] = useState([]);
    
      useEffect(() => {
        const fetchCards = async () => {
          try {
            const response = await axios.get("http://localhost:3001/gigs");
            setCards(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchCards();
      }, []);
    
    
      return (
        <div className="">
          <div className="grid"> 
            </div>
          <div className="ml-56  space-y-2">
            <div className="font-bold mt-20 ml-8 text-2xl">UI/UIX Projects   
            </div>
            <div className=" cards grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{margin: '30px'}}>
            {cards.map(project => (
                project && project.userID === userID ? (
              <div >     
              <div key={project._id} className="p-5 mt-12 h-48  w-60 text-black  flex flex-col justify-center items-center rounded-xl  shadow bg-white  border hover:border-[#647DFF] cursor-pointer">
                <h3 className="text-xl ">{project.namegigs}</h3>
                <p className="text-xs ml-2">{project.description}</p>
                <div>
                  <img
                    src={project.image}
                    alt="Image"
                    className=" h-24 ml-2 rounded mt-3 mr-24"
                  />
                </div>
              </div>
                    
              </div>
               ) : null  
          ))}
            </div>
          </div>
          <div>
            
          </div>
        </div>
      );
}
