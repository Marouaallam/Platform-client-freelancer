import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { TopBar } from './TopBar';
import {  SideBar } from './drawer';
import { useState, useEffect } from "react";
import axios from "axios";
import { Popup } from "@/components/popup";
import { PopupUpdate } from '../../components/popupUpdate';


const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Project=() => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    const handleRemove = (projectId) => {
        axios.delete(`http://localhost:3001/project/${projectId}`)
          .then(() => {
            setCards(cards.filter(project => project._id !== projectId));
          })
          .catch(err => console.error(err));
      };
    
      const [cards, setCards] = useState([]);
    
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
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
       
        <Typography paragraph>
          
          
      <div className="">
      
      <div className="ml-4 space-y-2">
        <div className="font-bold text-xl">Projects 
       
            
        </div>
        {cards.map(project => (
        <div className='flex justify-center items-center'>          
          <div key={project._id} className="flex p-2 w-[700px] items-center bg-white rounded border hover:border-[#647DFF] cursor-pointer">
           <div>
              <img
                src={project.image}
                alt="Image"
                className="w-6 h-6 rounded mr-24"
              />
              <h4 className="text-[8px]">{project.postedBy}</h4>
            </div>
            <h3 className="text-[8px] w-24">{project.nomProjet}</h3>
            <p className="text-[8px]">{project.description}</p>
          </div>
          <div>
          <button className="ml-2 p-2 rounded  bg-rose-600" onClick={() => handleRemove(project._id) }>DELETE</button>
           </div>
           
                 
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
          
        </Typography>
      </Box>
    </Box>
  );
  
 
}

