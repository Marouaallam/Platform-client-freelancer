import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import logo from '../assets/skillance.png';

export const Auth = () =>{
  return (
    <div className='' >
        <div className='flex justify-center  mt-10 '>
          <img src={logo} className='w-12 h-12'/>
        </div>
        <div className='flex justify-center  mt-4  '>
           <a href='\' className='text-xl font-bold'>Skillance</a>
        </div>
          
        
        <div className='flex justify-center mt-10 text-5xl font-bold ' >
          Skillance 
          <span  className='pl-2 text-[#5C73EB]'>Log in</span>
        </div>
        <div className='flex justify-center  mt-12  '>
          <Login  />
        </div>
       
    </div>
  )
}
const Login =()=>{
    const [_, setCookies] = useCookies(["access_token"]);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          email,
          password,
        });
  
        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);
        {email === "Admin@gmail.com" ? navigate("/dashboard"):navigate("/profile");}
      } catch (error) {
        console.error(error);
      }
    };
  
    
    return(
        <div className='signin-container'>
           <form onSubmit={handleSubmit}> 

             <div>
                <label ></label>
                <input 
                  type="email"
                  id="email"
                  value={email}
                  placeholder='Email'
                  onChange={(event)=>setEmail(event.target.value)}
                  className='mb-4 p-3 pr-96 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
             </div>
             <div>
                <label ></label>
                <input 
                  type="password"
                  id="password"
                  value={password}
                  placeholder='Password'
                  onChange={(event)=>setPassword(event.target.value)}
                  className='mb-4 p-3 pr-96 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

                />
             </div>
             <div className='flex justify-end'>
             <button type='submit'
             className=' mt-8 mb-32 py-2 px-6 bg-[#A2B1FF] border border-[#5C73EB] rounded-xl'
             >Next</button>
             </div>
             
           </form>
          <a href='/signup' className="profilink" style={{fontSize:'14px', marginBottom:'120px', marginLeft:'0px'}}>Don't have an account?</a>
        </div>
    )
}
