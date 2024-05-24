

export const Payement =() =>{
   return(
    <div className='flex justify-center mt-12'>
    <form > 
        <div className='flex justify-center mt-10 text-3xl font-bold mb-12' >
          Fill Your Card info
          
        </div>
        
      <div className="grid">
         <label className="font-bold mb-3">Card number</label>
         <input 
           type="description"
           id="description"
          
           placeholder='0000-0000-0000-0000'
           
           className='mb-4 p-3 pr-96  bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

         />
      </div>
      <div className="flex gap-6">
      <div className="grid">
      <label className="font-bold mb-3">Expire date</label>
         <input 
           type="description"
           id="description"
          
           placeholder='MM/YY'
           
           className='mb-4 p-3 pr-20  bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

         />
         </div>
         <div className="grid">
         <label className="font-bold mb-3">CVV </label>
         <input 
           type="description"
           id="description"
          
           placeholder='.....'
           
           className='mb-4 p-3 pr-20  bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'

         />
         </div>
      </div>
      <div className='flex justify-end'>
      <button type='submit'
      className=' mt-8 mb-32 py-2 px-6 bg-[#A2B1FF] border border-[#5C73EB] rounded-xl'
      >Confirm Payement</button>
      </div>
      
    </form>

 </div>
)
}