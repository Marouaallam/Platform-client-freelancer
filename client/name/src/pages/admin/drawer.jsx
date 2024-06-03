import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import { Avatar } from '@mui/material';
import { useNavigate ,useLocation} from 'react-router-dom';


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

const Array1=[
  {"text":"Dashboard","icon":<HomeOutlinedIcon />,"path":"/dashboard"},
  {"text":"User","icon":<AccountCircleOutlinedIcon />,"path":"/dashboard/user"},
  {"text":"Project","icon":<TopicOutlinedIcon />,"path":"/dashboard/project"},
  {"text":"Report","icon":<AssessmentOutlinedIcon />,"path":"/dashboard/report"},
]

export const SideBar=({open,handleDrawerClose}) =>{
  const navigate=useNavigate()
  let location=useLocation()
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Avatar
    
    sx={{mx: "auto",width:"55" ,height:"55",mt:2}}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCDlginZPXtHrX80AfWGtefluFyC2aK-BJg0HU4LGrw&s" 
     />
    <Typography align='center' >ALLAM AMOUCHE</Typography>
    <Divider />
    <List>
      {Array1.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton 
          onClick={()=>{
            navigate(item.path)
          }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor:location.pathname === item.path?"#d9ddec":null
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
             </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
   
  </Drawer>
  )
}

