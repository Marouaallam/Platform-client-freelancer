import {Link} from 'react-router-dom';
import logo from '../assets/skillance.png';
import { Searchbar } from './searchBar';
import { useState } from 'react';


const Footer = () => {
    return (
        <div className='relative'>
          <div className='md:min-w-0 flex  items-center  py-4 px-14 '>
              <div className='flex justify-center items-center gap-2 mr-52'>
                <img src={logo} className='w-10 h-10'/>
                <a href="/" style={{fontWeight:'600'}}>Skillance</a>
              </div>
              <div className='flex mr-16 ml-16 gap-8 '>
                <p>&copy; 2024 Skillance &middot; All Rights Reserved</p>
              </div>
              <div className='flex flex-row ml-52'>
              <a href='' className='flex flex-row h-6 w-auto'>
                <img className='mr-4' src='/ig.png' />
              </a>
              <a href='' className='flex flex-row h-6 w-auto'>
                <img className='mr-4' src='/facebook.png' />
              </a>
              <a href='' className='flex flex-row h-6 w-auto'>
                <img className='mr-4' src='/x.png' />
              </a>
              <a href='' className='flex flex-row h-6 w-auto'>
                <img className='mr-4' src='/linkedin.png' />
              </a>
              </div>
              
          </div>
        </div>
      )
}


export default Footer