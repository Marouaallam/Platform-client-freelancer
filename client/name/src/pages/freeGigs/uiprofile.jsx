import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Popup } from './Popup';
import { PopupUpdate } from './popupUpdate';
import { MdDelete } from "react-icons/md";
import { SideBar } from '@/components/sideBar';


export const Uiprofile=() =>{
    const handleRemove = (projectId) => {
      if(confirm('Are you sure you want to delete this?')) {
        axios.delete(`http://localhost:3001/gigs/${projectId}`)
          .then(() => {
            setCards(cards.filter(project => project._id !== projectId));
          })
          .catch(err => console.error(err));
        }else {
          // Do nothing!
          console.log('Thing was not deleted.');
        }
      };
    
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
              <SideBar />  
            </div>
          <div className="ml-56  space-y-2">
            <div className="font-bold mt-20 ml-8 text-2xl">UI/UIX Projects 
            <Popup/>   
            </div>
            <div className=" cards grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{margin: '30px'}}>
            {cards.map(project => (
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
                    <div className=' flex items-center mb-1 ml-48'>
                    <MdDelete className="cursor-pointer" onClick={() => handleRemove(project._id)}/>
                     <PopupUpdate
                      id={project._id}
                      image={project.image}
                      namegigs={project.namegigs}
                      description={project.description}
                     />
                     </div>
              </div>
            ))}
            </div>
          </div>
          <div>
            
          </div>
        </div>
      );
}
