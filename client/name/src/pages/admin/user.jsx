import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { TopBar } from './TopBar';
import {  SideBar } from './drawer';
import { useState, useEffect } from "react";
import axios from "axios";

const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const User=() => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    const [cards, setCards] = useState([]);
    
      useEffect(() => {
        const fetchCards = async () => {
          try {
            const response = await axios.get("http://localhost:3001/auth/signup");
            setCards(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchCards();
      }, []);
      const handleRemove = (userId) => {
        if(confirm('Are you sure you want to delete this?')) {
          axios.delete(`http://localhost:3001/auth/signup/${userId}`)
          .then(() => {
            setCards(cards.filter(user=> user._id !== userId));
          })
          .catch(err => console.error(err));
        }else {
          // Do nothing!
          console.log('Thing was not deleted.');
        }
      };

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
        <div className="font-bold text-xl">Users 
       
            
        </div>
        {cards.map(user => (
        <div className='flex justify-center items-center'>          
          <div key={user._id} className="flex p-2 w-[700px] items-center bg-white rounded border hover:border-[#647DFF] cursor-pointer">
           <div>
              <h4 className="text-sm">{user.firstname}</h4>
            </div>
            <h3 className="text-sm w-24">{user.lastname}</h3>
            <p className="text-sm">{user.username}</p>
          </div>
          <div>
          <button className="ml-2 p-2 rounded  bg-rose-600" onClick={() => handleRemove(user._id) }>DELETE</button>
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

