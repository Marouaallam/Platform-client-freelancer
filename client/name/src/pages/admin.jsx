import { useState,useEffect } from "react"
import axios from "axios";


export const AdminDashboard =() =>{
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        const fetchcards= async()=>{
        try{
        const response= await axios.get("http://localhost:3001/project");
        setCards(response.data)
        }catch(err){
            console.error(err)
        }
    }
    fetchcards()
    },[])
    return (
        <div className="h-screen h-fit bg-[#e8e9ef] ">
            <div className="pl-40 pt-40 pb-24 font-bold text-3xl">
                Admin Dashboard 
            </div>
        <div className=" ml-40 space-y-2" >
            <div className="font-bold text-xl ">Projects</div>
            {
            cards.map((Projects,i) => (
                            <div className="flex p-2 w-[900px] items-center bg-white rounded border hover:border-[#647DFF] cursor-pointer ">
                                <div className="">
                                    <img
                                        src={Projects.image}
                                        alt="Image"
                                        className="w-6 h-6 rounded mr-24"
                                    />
                                    <h4 className="text-[8px] ">{Projects.postedBy}</h4>
                                </div>
                                <h3 className="text-[8px] w-24">{Projects.nomProjet}</h3>
                                <p className="text-[8px] ">{Projects.description}</p>
                            </div>
                        ))
                    }
                        </div>
                        <div>
                            <div className="pl-40 pt-24 font-bold text-xl">
                                Profiles
                            </div>
                        </div>
                </div>
    )
}