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

export const Report=() => {
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
            const response = await axios.get("http://localhost:3001/report");
            setCards(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchCards();
      }, []);
      const handleRemove = (reportId) => {
        if(confirm('Are you sure you want to delete this?')) {
          axios.delete(`http://localhost:3001/report/${reportId}`)
          .then(() => {
            setCards(cards.filter(report => report._id !== reportId));
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
         <div>
          <div className='text-2xl'>Reports</div>
         {cards.map(report => (
        <div className='flex justify-center items-center '>          
          <div key={report._id} className="flex p-2 mt-4 pb-8 w-[600px] items-center bg-white rounded border hover:border-[#647DFF] cursor-pointer">
           <div className=''>
              <h4 className="text-sm font-bold">UserName : <span className=''>{report.userName}</span></h4>
              <h4 className="text-sm text-slate-600">{report.description}</h4>
            </div>
           
          </div>
          <div>
          <button className="ml-2 p-2 rounded  bg-rose-600" onClick={() => handleRemove(report._id) }>DELETE</button>
         </div>
           
                 
          </div>
        ))}
         </div>
        </Typography>
      </Box>
    </Box>
  );
  
 
}

