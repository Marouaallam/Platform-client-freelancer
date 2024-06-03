import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "./ui/alert-dialog"
  import { Button } from "./ui/button"

export const ProjectPopup = ({receiverId,projectId, image, postedBy, nomProjet, description,budget,skillsRequired,dateDebut,DDL }) => {
  const userID = window.localStorage.getItem("userID");
  const handleApply = async () => {
    try {
      await axios.post("http://localhost:3001/notification", {
        senderId: userID,
        receiverId: receiverId,
        projectId: projectId,
      });
      alert('You applied successfully!!');
    } catch (error) {
      console.error("Failed to send notification:", error);
      alert('Failed to apply. Please try again.');
    }
  };
    return(
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <div className='bottom-0 text-end '>
                 <Button variant="outline" className="border-none text-decoration-line underline">Show more details</Button>
        </div>
         </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Project Details</AlertDialogTitle>
            <AlertDialogDescription>
              
            </AlertDialogDescription>
            <div className="flex items-start">
                                    <img
                                        src={image}
                                        alt="Image"
                                        className="w-8 h-8 rounded mr-2"
                                    />
                                    <h4>{postedBy}</h4>
                                </div>
           
            <h1 className='font-bold'>{nomProjet}</h1>
            <h1>{description}</h1>
            <h1 className='font-semibold'>Budget {budget}</h1>
            <div className='flex  '>
              <h1 className='font-semibold pr-2'>Date debut </h1>
            <h1>{dateDebut}</h1>
            <h1 className='font-semibold pl-6 pr-2'>DDL </h1>
            <h1>{DDL}</h1>
            </div>
           <div className='flex'> 
            <h1 className='pr-2 font-semibold'>Skills Required</h1>
           <h1>{skillsRequired}</h1>
           </div>
           <button className='hover:underline' onClick={handleApply}>
            Appliquer
            </button>
           
          </AlertDialogHeader>
         
          <AlertDialogFooter>
            <AlertDialogCancel className='rounded'>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-[#5C73EB] rounded">Done</AlertDialogAction>
          
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

}