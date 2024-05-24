import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { TopBar } from './TopBar';
import {  SideBar } from './drawer';
import { HiMiniUsers } from "react-icons/hi2";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const  Dashboard = () =>{
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
       
        <Typography paragraph>
          <div className='flex ml-24 mt-8 gap-6 '>
             <div className='w-68 h-84 p-6 border rounded-xl hover:bg-[#cdcaeb] cursor-pointer'>
              <div className='flex mt-20'>
                <div className='flex-grow'> 
                 <p className='text-xl font-semibold mb-8'>Users' Number</p>
                </div>
                <HiMiniUsers size={30} /> 
              </div>
              <span className='text-3xl font-semibold'>143</span>
              <div className='text-sm mt-12 text-gray-400'>+209 users Added every week</div>
              </div>
             <div className='space-y-4'>
             <div className='w-68 h-44 p-6 border rounded-xl hover:bg-[#cdcaeb] cursor-pointer'>
              <div className='flex '>
                <div className='flex-grow'> 
                 <p className='text-xl font-semibold mb-8'>Projects' Number</p>
                </div>
                <TopicOutlinedIcon size={30}/>
              </div>
              <span className='text-3xl font-semibold'>10,499</span>
              <div className='text-sm mt-6 text-gray-400'>+909 projects Added every week</div>
             </div>
             <div className='w-68 h-44 p-6 border rounded-xl hover:bg-[#cdcaeb] cursor-pointer'>
              <div className='flex '>
                <div className='flex-grow'> 
                 <p className='text-xl font-semibold mb-8'>Reports' Number</p>
                </div>
                <AssessmentOutlinedIcon size={30} />
              </div>
              <span className='text-3xl font-semibold'>9</span>
             </div>
             </div>
          </div>
          
        </Typography>
      </Box>
    </Box>
  );
}