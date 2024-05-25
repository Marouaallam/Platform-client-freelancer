import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const Conversation = ({data,currentUserID}) => {
    const [userData,setUserData]=useState(null)
    useEffect(()=>{
        const userID =data.members.find((id)=>id!==currentUserID)
        const getUserData = async()=>{
            try{
             const {data}=await axios.get(`http://localhost:3001/auth/login/${userID}`)
             setUserData(data)
             console.log(data)
            }catch(error){
                console.log(error)
            }
        }
        getUserData();
    },[])
    return(
        <div>
            <div className="flex">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width={30} className='rounded-full'/>
              <span className="text-lg font-semibold">{userData && userData.username}</span>
            </div>
        </div>
    )
}