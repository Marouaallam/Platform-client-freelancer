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

 
  export const PopupUpdate = ({ id,image, postedBy, nomProjet, description, budget, skillsRequired, dateDebut, DDL }) => {
    

    const [newImage, setNewImage] = useState(image);
    const [newPostedBy, setNewPostedBy] = useState(postedBy);
    const [newNomProjet, setNewNomProjet] = useState(nomProjet);
    const [newDescription, setNewDescription] = useState(description);
    const [newBudget, setNewBudget] = useState(budget);
    const [newSkillsRequired, setNewSkillsRequired] = useState(skillsRequired);
    const [newDateDebut, setNewDateDebut] = useState(dateDebut);
    const [newDDL, setNewDDL] = useState(DDL);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/project/${id}`, {
                image: newImage,
                postedBy: newPostedBy,
                nomProjet: newNomProjet,
                description: newDescription,
                budget: newBudget,
                skillsRequired: newSkillsRequired,
                dateDebut: newDateDebut,
                DDL: newDDL
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
                <Button variant="outline" className="ml-4 p-2 rounded bg-green-500">UPDATE</Button>
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
                        id="postedBy"
                        value={newPostedBy}
                        placeholder="Posted By"
                        onChange={(event) => setNewPostedBy(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="nomProjet"
                        value={newNomProjet}
                        placeholder="Project Name"
                        onChange={(event) => setNewNomProjet(event.target.value)}
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
                        id="budget"
                        value={newBudget}
                        placeholder="Budget"
                        onChange={(event) => setNewBudget(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="skillsRequired"
                        value={newSkillsRequired}
                        placeholder="Skills Required"
                        onChange={(event) => setNewSkillsRequired(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="dateDebut"
                        value={newDateDebut}
                        placeholder="Start Date"
                        onChange={(event) => setNewDateDebut(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        id="DDL"
                        value={newDDL}
                        placeholder="Deadline"
                        onChange={(event) => setNewDDL(event.target.value)}
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