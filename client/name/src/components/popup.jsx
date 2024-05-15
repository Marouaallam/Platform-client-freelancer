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

export const Popup = () => {
    

    const [postedBy,setPostedBy]=useState("");
    const [nomProjet,setNomProjet]=useState("");
    const [dateDebut,setDateDebut]=useState("");
    const [DDL,setDDL]=useState("");
    const [description,setDescription]=useState("");
    const [budget,setBudget]=useState("");
    const [skillsRequired,setSkillsRequired]=useState("");
    const [image,setImage]=useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("http://localhost:3001/project", {
          postedBy,
          nomProjet,
          dateDebut,
          DDL,
          description,
          budget,
          skillsRequired,
          image
        });
        alert("Project added successfully !! ")
        window.localStorage.setItem("userID", result.data.userID);
      } catch (error) {
        console.error(error);
      }
    };
  
    return(
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="ml-4 p-2 rounded  bg-sky-500">Add Project +</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add new project!</AlertDialogTitle>
            <AlertDialogDescription>
              Fill the informations down bellow .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form onSubmit={handleSubmit}>
          <input 
                  type="text"
                  id="postedBy"
                  value={postedBy}
                  placeholder='Posted By'
                  onChange={(event)=>setPostedBy(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <input 
                  type="text"
                  id="NomProjet"
                  value={nomProjet}
                  placeholder='NomProjet'
                  onChange={(event)=>setNomProjet(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <input 
                  type="text"
                  id="dateDebut"
                  value={dateDebut}
                  placeholder='Date Debut'
                  onChange={(event)=>setDateDebut(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <input 
                  type="text"
                  id="DDL"
                  value={DDL}
                  placeholder='DDL'
                  onChange={(event)=>setDDL(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <input 
                  type="text"
                  id="description"
                  value={description}
                  placeholder='Description'
                  onChange={(event)=>setDescription(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <input 
                  type="text"
                  id="budget"
                  value={budget}
                  placeholder='budget'
                  onChange={(event)=>setBudget(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <input 
                  type="type"
                  id="skillsrequired"
                  value={skillsRequired}
                  placeholder='Skills Required'
                  onChange={(event)=>setSkillsRequired(event.target.value)}
                  className='mb-4  p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                 <input 
                  type="type"
                  id="image"
                  value={image}
                  placeholder='Image url'
                  onChange={(event)=>setImage(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                <div>
                <button type='submit'
             className=' p-1 px-3 bg-[#5C73EB] border border-[#5C73EB] rounded'
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