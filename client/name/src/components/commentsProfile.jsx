import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const CommentsProfile =({id}) =>{
  const [comment, setComment] = useState([]);
 console.log(id)
      
  
  useEffect(() => {
    const verifyUserAndFetch = async () => {
        try {
          const res = await axios.get("http://localhost:3001/comment");
          setComment(res.data);
          
        } catch (error) {
            console.log(error)
        }
      }
    verifyUserAndFetch();
  }, []);
  
  useEffect(() => {
    const verifyUserAndFetch = async () => {
        try {
          const res = await axios.get("http://localhost:3001/comment");
          setComment(res.data);
          
        } catch (error) {
            console.log(error)
        }
      }
    verifyUserAndFetch();
  }, []);
  
  return (
    <div className='mb-24' >
      <div>
        Comments
      </div>
      <hr className="h-px my-1 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      {comment.map((comm, i) => (
                    comm && comm.profileID === id ? (
      <div key={i} >
      <div className='flex mt-8 mb-2'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width={45} className='rounded-full'/>
        </div>
        <div className='ml-4'>
        <p className='mb-1 font-bold'>{comm.username}</p>
        <StarIcon style={{ fontSize: 25, color: "#FFD500" }} /> {comm.rating}  <span className='text-xs '>{comm.time}</span>
        </div>
       </div>
       <p>{comm.description}</p>
       </div>
       ) : null
      ))}
    </div>
  )
}

