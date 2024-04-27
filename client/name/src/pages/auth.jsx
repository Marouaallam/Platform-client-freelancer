import React from 'react'
import { useState } from 'react'

export const Auth = () =>{
  return (
    <div>
        <Signup />
    </div>
  )
}
const Signup =()=>{
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [username,setUsername]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div className='signin-container'>
           <form>
             <div>
                <label></label>
                <input 
                  type="text"
                  id="firstname"
                  value={firstname}
                  placeholder='First Name'
                  onChange={(event)=>setFirstname(event.target.value)}
                />
             </div>
             <div>
                <label ></label>
                <input 
                  type="text"
                  id="lastname"
                  value={lastname}
                  placeholder='Last Name'
                  onChange={(event)=>setLastname(event.target.value)}
                />
             </div>
             <div>
                <label ></label>
                <input 
                  type="text"
                  id="username"
                  value={username}
                  placeholder='UserName'
                  onChange={(event)=>setUsername(event.target.value)}
                />
             </div>
             <div>
                <label ></label>
                <input 
                  type="phone"
                  id="phone"
                  value={phone}
                  placeholder='Last Name'
                  onChange={(event)=>setPhone(event.target.value)}
                />
             </div>
             <div>
                <label ></label>
                <input 
                  type="email"
                  id="email"
                  value={lastname}
                  placeholder='Email'
                  onChange={(event)=>setEmail(event.target.value)}
                />
             </div>
             <div>
                <label ></label>
                <input 
                  type="text"
                  id="pasword"
                  value={password}
                  placeholder='Password'
                  onChange={(event)=>setPassword(event.target.value)}
                />
             </div>
             <button type='submit'>Next</button>
           </form>

        </div>
    )
}
