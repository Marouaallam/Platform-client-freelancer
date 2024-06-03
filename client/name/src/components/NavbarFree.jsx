import { Link } from 'react-router-dom';
import logo from '../assets/skillance.png';
import { Searchbar } from './searchBar';
import { useState } from 'react';
import ProfilIcon from './ProfilIcon';
import { IoIosNotifications } from "react-icons/io";
import Notification from './notificationicon';


export const NavbarFree = () => {
  const Logout = () => {
    window.localStorage.clear();
    window.location.href = "/auth";
  };

  return (
    <div className='relative'>
      <div className='md:min-w-0 flex items-center py-4 px-14'>
        <div className='flex justify-center items-center gap-2 mr-56'>
          <img src={logo} className='w-10 h-10' alt="Skillance Logo" />
          <a href="/">Skillance</a>
        </div>
        <div className='flex mr-28 ml-26 gap-8'>
          <a href="/" className="text-decoration-line:none">Home</a>
          <a href="#aboutus" className="text-decoration-line:none">About Us</a>
          <Link to="/contactus" className="text-decoration-line:none">Contact Us</Link>
        </div>
        <div className='absolute ml-[600px]'>
          <Searchbar />
        </div>
        <div>
          <button onClick={Logout} className='flex justify-end ml-40 px-6 py-2 text-white rounded-xl bg-[#647DFF]'>
            Logout
          </button>
        </div>
        
        <Notification />
        <ProfilIcon />
      </div>
    </div>
  );
};
