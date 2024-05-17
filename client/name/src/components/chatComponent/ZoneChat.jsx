import { Button } from "@mui/material";
import { Header } from "./Header.jsx";
import { InputBox } from "./Input.jsx";
import { SideBar } from "./SideBar.jsx";
import { BsSearchHeart } from "react-icons/bs";
import { CiExport } from "react-icons/ci";


export const ZoneChat = () => {
  return (
    <div className="w-5/6 bg-gray-100 h-full p-4">
    <Header />
      <div className="flex ">
        <div >
               <div className="border-b border-gray-300">
                 <input type="search" 
                  className=" cursor-pointer m-4 p-3  rounded-xl border-0  pr-60 bg-[#eaebec] outline-none  "
                  placeholder="search..."/>   
                </div>
                <div>
                {dataP.map ((d) => (
                     <div className=" flex  items-center p-2 w-[430px] h-16 hover:bg-slate-300 focus:bg-slate-300 cursor-pointer m-3 border rounded">
                         <img src={d.img} alt="" className="h-10 w-auto" />
                         <div className="ml-4 w-[280px]">
                           <p className="text-base font-semibold">{d.name} </p>
                           <p className="text-sm ">{d.description} </p>
                         </div>
                         <div className="text-sm text-slate-500">
                           <p>{d.time} </p>
                         </div>
                         
                     </div>
                ))}
                </div>

        </div>
        <div className=" w-full h-screen p-4  bg-[#eaebec] ">
                 <div className=" flex  items-center  w-[430px] h-16 border-b border-gray-300 ">
                         <img src='/profilG.png' alt="" className="h-10 w-auto" />
                         <div className="ml-4 w-[280px]">
                           <p className="text-base font-semibold">Allam maroua </p>
                           <p className="text-sm ">ui/ux designer </p>
                         </div> 
                 </div>
                 <div className="flex ml-1 my-4">
                   <img src='/profilG.png' alt="" className="h-10 w-auto" />
                   <div className=" w-96 h-20 ml-4 p-3 text-sm  rounded-b-xl rounded-tr-xl  bg-slate-50">
                    hi there nice to meet u 
                   </div>
                 </div>
                 <div className="flex ml-1 my-4">
                   <div className=" w-96 h-20 mr-4 p-3 text-sm  rounded-b-xl rounded-tl-xl  bg-slate-50">
                    hi there nice to meet u 
                   </div>
                   <img src='/profilB.png' alt="" className="h-10 w-auto " />
                 </div>
                 <div className="flex items-center mt-24  border-t border-gray-300">
                       <p className="text-sm text-slate-500 flex-grow">write your message here</p>
                       <div className="flex justify-end "><Button>Send </Button></div>
                       <CiExport />
                       
                 </div>
        </div>
      </div>
    
  </div>
  
  );
};

const dataP = [
    {
        img:'/profilG.png',
        name:'Allam maroua',
        time: 'Now',
       
        description: 'We will discuss later.'
    },
    {
        img:'/profilG.png',
        name:'Amouche khadidja',
        time: 'Today',
        description: 'Thank you mr.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        time: 'Yesterday',
       
        description: 'Nice to meet you.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        time: 'feb 22,2024',
        description: 'done.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        time: 'feb 10,2024',
       
        description: 'Send me the file.'
    },
    
    
]

