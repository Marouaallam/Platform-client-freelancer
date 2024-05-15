import React from 'react'
import StarIcon from '@mui/icons-material/Star';

export const Comments =() =>{
  return (
    <div >
      <p>Comments</p>
      <hr class="h-px my-1 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div>
      <div className='flex mt-8 mb-2'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width={45} className='rounded-full'/>
        </div>
        <div className='ml-4'>
        <p className='mb-1 font-bold'>user1</p>
        <StarIcon style={{ fontSize: 30, color: "#FFD500" }} /> 5.00  <span className='text-xs'>feb 22, 2024</span>
        </div>
       </div>
       <p>Aya is a great worker doing her job profesionaly and at the time ,neat and orgnized outputs </p>
       </div>
       <div>
      <div className='flex mt-8 mb-2'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width={45} className='rounded-full'/>
        </div>
        <div className='ml-4'>
        <p className='mb-1 font-bold'>user1</p>
        <StarIcon style={{ fontSize: 30, color: "#FFD500" }} /> 5.00  <span className='text-xs'>feb 22, 2024</span>
        </div>
       </div>
       <p>Aya is a great worker doing her job profesionaly and at the time ,neat and orgnized outputs </p>
       </div>
       <div>
      <div className='flex mt-8 mb-2'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width={45} className='rounded-full'/>
        </div>
        <div className='ml-4'>
        <p className='mb-1 font-bold'>user1</p>
        <StarIcon style={{ fontSize: 30, color: "#FFD500" }} /> 5.00  <span className='text-xs'>feb 22, 2024</span>
        </div>
       </div>
       <p>Aya is a great worker doing her job profesionaly and at the time ,neat and orgnized outputs </p>
       </div>
    </div>
  )
}

