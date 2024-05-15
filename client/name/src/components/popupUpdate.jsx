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

 
  export const PopupUpdate = () => {
    const { id } = useParams();

    const [postedBy, setPostedBy] = useState("");
    const [nomProjet, setNomProjet] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [DDL, setDDL] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [skillsRequired, setSkillsRequired] = useState("");
    const [image, setImage] = useState("");

    const handleUpdate = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const fetchcards = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/project/${id}`);
                const projectData = response.data;
                setPostedBy(projectData.postedBy);
                setNomProjet(projectData.nomProjet);
                setDateDebut(projectData.dateDebut);
                setDDL(projectData.DDL);
                setDescription(projectData.description);
                setBudget(projectData.budget);
                setSkillsRequired(projectData.skillsRequired);
                setImage(projectData.image);
            } catch (err) {
                console.error(err);
            }
        };
        fetchcards();
    }, [id]);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="ml-4 p-2 rounded  bg-green-500">UPDATE</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add new project!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Fill the information down below.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        id="postedBy"
                        value={postedBy}
                        placeholder={postedBy || 'Posted By'}
                        onChange={(event) => setPostedBy(event.target.value)}
                        className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
                    />
                    {/* Repeat the same pattern for other input fields */}
                    <div>
                        <button type='submit'
                            className='p-1 px-3 bg-[#5C73EB] border border-[#5C73EB] rounded'
                        >Next</button>
                    </div>
                </form>
                <AlertDialogFooter>
                    <AlertDialogCancel className='rounded'>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-[#5C73EB] rounded">Done</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
