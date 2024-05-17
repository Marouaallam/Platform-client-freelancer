import React from 'react'
import { useState } from 'react'

export const Reports =() =>{
    const [description,setDescription]=useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    }
  return (
    <div className='flex justify-center mt-12'>
    <form onSubmit={handleSubmit}> 
        <div className='flex justify-center mt-10 text-3xl font-bold mb-12' >
          Write your Report here 
        </div>
      <div>
         <label ></label>
         <input 
           type="description"
           id="description"
           value={description}
           placeholder='Report Description'
           onChange={(event)=>setDescription(event.target.value)}
           className='mb-4 p-3 pr-96 pb-48 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

         />
      </div>
      <div className='flex justify-end'>
      <button type='submit'
      className=' mt-8 mb-32 py-2 px-6 bg-[#A2B1FF] border border-[#5C73EB] rounded-xl'
      >Next</button>
      </div>
      
    </form>

 </div>
  )
}

