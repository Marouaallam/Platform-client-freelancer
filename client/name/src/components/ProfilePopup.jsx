import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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

 
  export const ProfilePopup = ({id,description,price, jobs}) => {
    

    
    const [newDescription, setNewDescription] = useState(description);
    const [newPrice, setNewPrice] = useState(price);
    const [newJobs, setNewJobs] = useState(jobs);
   
    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/profile/${id}`, {
                description: newDescription,
                price: newPrice,
                jobs: newJobs,
               
            });
            console.log(response);
            alert("Profile updated successfully!!");
        } catch (err) {
            console.error('Error updating profile:', err);
            alert(`Error: ${err.response ? err.response.data.message : err.message}`);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="mt-2 ml-12 p-2 rounded px-6 bg-[#A2B1FF] ">Edit profile</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit profile!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Fill the information down below.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleUpdate}>
   
                    <input
                        type="text"
                        id="description"
                        value={newDescription}
                        placeholder="description"
                        onChange={(event) => setNewDescription(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />

                    
                    <input
                        type="text"
                        id="price"
                        value={newPrice}
                        placeholder="price"
                        onChange={(event) => setNewPrice(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="jobs"
                        value={newJobs}
                        placeholder="jobs"
                        onChange={(event) => setNewJobs(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />


                    <div>
                        <button type='submit' className='p-1 px-3 bg-[#5C73EB] border border-[#5C73EB] rounded'>update</button>
                    </div>
                </form>
                <AlertDialogFooter>
                    <AlertDialogCancel className='rounded'>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-[#5C73EB] rounded">Done</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};