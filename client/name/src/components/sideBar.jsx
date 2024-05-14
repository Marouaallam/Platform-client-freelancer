import {Link} from 'react-router-dom';


export const SideBar =() =>{
    return (
        <div className=" fixed w-1/6 bg-[#647DFF]  h-full text-white">
            <div className="mt-24  ">
               <div className='mx-20 mt-6'>
                   <Link to="/" className="text-decoration-line:none hover:text-[#283263] ">
                    Home</Link>
               </div>
               <div className='mx-20 mt-6'>
                   <Link to="/profile" className="text-decoration-line:none hover:text-[#283263]">
                    Profile</Link>
               </div>
               <div className='mx-20 mt-6'>
                   <Link to="/profile/chat" className="text-decoration-line:none hover:text-[#283263] ">
                    Chat</Link>
               </div>
             
            </div>
     
        </div>
    )    
}
