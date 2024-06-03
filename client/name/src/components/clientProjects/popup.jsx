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
  } from "../../components/ui/alert-dialog"

  import { Button } from "../../components/ui/button"

export const Popup = () => {
    

    const [postedBy,setPosedBy]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [nomProjet,setNomProjet]=useState("");
    const [dateDebut,setDateDebut]=useState("");
    const [DDL,setDDL]=useState("");
    const [budget,setbudget]=useState("");
    const [skillsRequired,setSkillsRequired]=useState("");

    const navigate = useNavigate();

    const userID = window.localStorage.getItem("userID");
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("http://localhost:3001/project", {
          userID:userID,
          postedBy,
          nomProjet,
          dateDebut,
          DDL,
          budget,
          skillsRequired,
          description, 
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
                  placeholder='postedBy'
                  onChange={(event)=>setPosedBy(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                 <input 
                  type="text"
                  id=""
                  value={nomProjet}
                  placeholder='Name Projet'
                  onChange={(event)=>setNomProjet(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                 <input 
                  type="text"
                  id="postedBy"
                  value={dateDebut}
                  placeholder='date Debut'
                  onChange={(event)=>setDateDebut(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                 <input 
                  type="text"
                  id="ddl"
                  value={DDL}
                  placeholder='DDL'
                  onChange={(event)=>setDDL(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                 <input 
                  type="text"
                  id="budget"
                  value={budget}
                  placeholder='BUDGET'
                  onChange={(event)=>setbudget(event.target.value)}
                  className='mb-4 p-1 pr-56 bg-[#E3E7FC] border border-[#5C73EB] rounded focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
                 <input 
                  type="text"
                  id="skillsRequired"
                  value={skillsRequired}
                  placeholder='skills required'
                  onChange={(event)=>setSkillsRequired(event.target.value)}
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