import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Popup } from './popup';
import { PopupUpdate } from './popUpdate';
import { MdDelete } from "react-icons/md";
import { SideBar } from '@/components/sideBar';

export const ClientProjects = () => {
  const userID = window.localStorage.getItem("userID");
  
  const [cards, setCards] = useState([]);

  const handleRemove = (projectId) => {
    if (confirm('Are you sure you want to delete this?')) {
      axios.delete(`http://localhost:3001/project/${projectId}`)
        .then(() => {
          setCards(cards.filter(project => project._id !== projectId));
        })
        .catch(err => console.error(err));
    } else {
      console.log('Thing was not deleted.');
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/project");
        setCards(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCards();
  }, []);

  return (
    <div>
      <div className="grid">
        
      </div>
      <div className="ml-64 mt-4">
        <Popup />
        <div className="cards mb-6 grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
          {cards.filter(project => project.userID === userID).map(project => (
            <div key={project._id} className="p-5 mt-12 h-48 w-60 text-black flex flex-col justify-center items-center rounded-xl shadow bg-white border hover:border-[#647DFF] cursor-pointer">
              <div className="flex items-start">
                <img
                  src={project.image}
                  alt="Image"
                  className="w-8 h-8 rounded mr-2"
                />
                <h4>{project.postedBy}</h4>
              </div>
              <h3>{project.nomProjet}</h3>
              <p className='text-sm'>{project.description}</p>
              <div className='flex items-center mb-1'>
                <MdDelete className="cursor-pointer" onClick={() => handleRemove(project._id)} />
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
    </div>
  );
};
