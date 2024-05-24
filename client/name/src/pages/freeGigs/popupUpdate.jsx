import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import { MdEdit } from "react-icons/md";
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
  } from "../../components/ui/alert-dialog"
  import { Button } from "../../components/ui/button"

 
  export const PopupUpdate = ({ id,image, namegigs, description}) => {
    

    const [newImage, setNewImage] = useState(image);
    const [newNamegigs, setNewnamegigs] = useState(namegigs);
    const [newDescription, setNewDescription] = useState(description);


    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/gigs/${id}`, {
                image: newImage,
                namegigs: newNamegigs,
                description: newDescription,
               
            });
            console.log(response);
            alert("Project updated successfully!!");
        } catch (err) {
            console.error('Error updating project:', err);
            alert(`Error: ${err.response ? err.response.data.message : err.message}`);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className=""><MdEdit /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit project!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Fill the information down below.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleUpdate}>
                    
                    <input
                        type="text"
                        id="nomProjet"
                        value={newNamegigs}
                        placeholder="Project Name"
                        onChange={(event) => setNewnamegigs(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="description"
                        value={newDescription}
                        placeholder="Description"
                        onChange={(event) => setNewDescription(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="image"
                        value={newImage}
                        placeholder="Image URL"
                        onChange={(event) => setNewImage(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <div>
                        <button type='submit' className='p-1 px-3 bg-[#5C73EB] border border-[#5C73EB] rounded'>Next</button>
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