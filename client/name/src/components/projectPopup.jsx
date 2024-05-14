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

export const ProjectPopup = () => {
    

    const [postedBy,setPostedBy]=useState("");
    const [nomProjet,setNomProjet]=useState("");
    const [dateDebut,setDateDebut]=useState("");
    const [DDL,setDDL]=useState("");
    const [description,setDescription]=useState("");
    const [budget,setBudget]=useState("");
    const [skillsRequired,setSkillsRequired]=useState("");
    const [image,setImage]=useState("");

    const [cards,setCards] = useState([]);
    useEffect(()=>{
        const fetchcards= async()=>{
        try{
        const response= await axios.get("http://localhost:3001/project");
        setCards(response.data)
        }catch(err){
            console.error(err)
        }
    }
    fetchcards()
    },[])
  
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
            <h1>{ProjectPopup.dateDebut}</h1>
          </AlertDialogHeader>
         
          <AlertDialogFooter>
            <AlertDialogCancel className='rounded'>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-[#5C73EB] rounded">Done</AlertDialogAction>
          
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

}