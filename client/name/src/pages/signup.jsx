import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import logo from '../assets/skillance.png';

export const Signup =()=>{
   
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [username, setUsername] = useState("");
   const [phone, setphone] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();
   const [role, setRole] = useState('freelancer');

   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response=await axios.post("http://localhost:3001/auth/signup", {
        firstname,
        lastname,
        username,
        phone,
        email,
        password,
        role
      });
      const userID = response.data._id; 
      await axios.post("http://localhost:3001/profile", {
        userID
      })
      alert("Registration Completed! Now login.");
      navigate("/auth");
    } catch (error) {
      console.error(error);
    }

  };
  

   return(
    <div className='' >
        <div className='flex justify-center  mt-10 '>
          <img src={logo} className='w-12 h-12'/>
        </div>
        <div className='flex justify-center  mt-4  '>
           <a href='\' className='text-xl font-bold'>Skillance</a>
        </div>
          
        <div className='flex justify-center mt-10 text-5xl font-bold ' >
          Skillance 
          <span  className='pl-2 text-[#5C73EB]'>Sign up</span>
        </div>

        <form onSubmit={handleSubmit}>
        <div className='flex justify-center mt-16 gap-4'>   
        <div>
           <div>
           <input
            type="text"
            id="firstname"
            value={firstname}
            placeholder='First Name'
            onChange={(event) => setFirstname(event.target.value)}
            className='mb-4 p-3 pr-64 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
           </div>
           <div>
           <input
            type="text"
            id="username"
            value={username}
            placeholder='Username'
            onChange={(event) => setUsername(event.target.value)}
            className='mb-4 p-3 pr-64 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
           </div>
           <div>
           <input
            type="email"
            id="email"
            value={email}
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
            className='mb-4 p-3 pr-64 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
           </div>
        </div>
        <div> 
           <div>
           <input
            type="text"
            id="lastname"
            value={lastname}
            placeholder='Last Name'
            onChange={(event) => setLastname(event.target.value)}
            className='mb-4 p-3 pr-64 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
           </div>
          
           <div>
           <input
            type="phone"
            id="phone"
            value={phone}
            placeholder='Phone Number'
            onChange={(event) => setphone(event.target.value)}
            className='mb-4 p-3 pr-64 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
           </div>
          
           <div>
           <input
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
            className='mb-4 p-3 pr-64 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
           </div>
           <div className='mb-4'>
          <label className='mr-2'>I am a:</label>
          <input
            type='radio'
            id='freelancer'
            name='role'
            value='freelancer'
            checked={role === 'freelancer'}
            onChange={() => setRole('freelancer')}
            className='mr-2'
          />
          <label htmlFor='freelancer' className='mr-4'>Freelancer</label>
          <input
            type='radio'
            id='client'
            name='role'
            value='client'
            checked={role === 'client'}
            onChange={() => setRole('client')}
            className='mr-2'
          />
          <label htmlFor='client'>Client</label>
        </div>
        </div> 
        </div>  
        <div className='flex justify-end'>
             <button type='submit'
             className=' mt-8 mb-32 mr-32 py-2 px-6 bg-[#A2B1FF] border border-[#5C73EB] rounded-xl'
             >Next</button>
        </div>
        </form>
       
        <a href='/auth' className="profilink" style={{fontSize:'14px', marginBottom:'50px', marginLeft:'175px'}}>Already have an account?</a>
       
    </div>
   )
}