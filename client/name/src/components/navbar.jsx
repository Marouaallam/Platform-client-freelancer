import {Link} from 'react-router-dom';
import logo from '../assets/skillance.png';
import { Searchbar } from './searchBar';
import { useState } from 'react';



export const Navbar =()=>{
  
    return (
      <div className='relative'>
        <div className='md:min-w-0 flex  items-center  py-4 px-14 '>
            <div className='flex justify-center items-center gap-2 mr-52'>
              <img src={logo} className='w-10 h-10'/>
              <a href="/">Skillance</a>
            </div>
            <div className='flex mr-32 ml-32 gap-8 '>
              <a href="/" className="text-decoration-line:none">Home</a>
              <a href="#aboutus" className="text-decoration-line:none">AboutUs</a>
              <Link to="/contactus" className="text-decoration-line:none">ContactUs</Link>
              
            </div>
            <div className='absolute ml-[750px] '>
              <Searchbar />
            </div>
            <div className='flex justify-end ml-40  px-6 py-2 text-white rounded-lg bg-[#647DFF]'>
              <Link to="/auth">Login</Link>
            </div>
            
        </div>
        </div>
    )
}