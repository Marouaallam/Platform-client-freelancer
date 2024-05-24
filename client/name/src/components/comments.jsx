import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const Comments =({id}) =>{
  const [comment, setComment] = useState([]);
  const [description,setDescription]=useState("");
  const [rating,setRating]=useState("");
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  const userpicture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

  const [userData, setUserData] = useState(null);

    const navigate = useNavigate();
      useEffect(() => {
        const verifyUserAndFetch = async () => {
          const userID = localStorage.getItem("userID");
          if (!userID) {
            navigate("/auth");
          } else {
            // fetchData
            try {
              const res = await axios.get(`http://localhost:3001/auth/login/${userID}`, {
                headers: {
                  Authorization: `Bearer ${userID}`,
                },
                // set state
              });
              setUserData(res.data);
              
            } catch (error) {
              // error while fetching probably token expired or invalid token
              console.log(error)
            }
          }
        };
        verifyUserAndFetch();
      }, []);
      console.log(userData)

  useEffect(() => {
    // Setting the current date once when the component mounts
    setCurrentDate(new Date().toLocaleDateString());
}, []);
  useEffect(() => {
    const verifyUserAndFetch = async () => {
        try {
          const res = await axios.get("http://localhost:3001/comment");
          setComment(res.data);
          
        } catch (error) {
            console.log(error)
        }
      }
    verifyUserAndFetch();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/comment", {
        description,
        time:currentDate,
        profileID:id,
        username:userData.username,
        rating,
        img:userpicture
      });
      console.log(currentDate)
      alert("comment submitted!")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='mb-24' >
      <form onSubmit={handleSubmit}>
        <div className=' '>
             <input
                        type="text"
                        id="nomProjet"
                        value={description}
                        placeholder="Comment"
                        onChange={(event) => setDescription(event.target.value)}
                        className='pb-2 pr-[580px] focus:outline-none  '
                    />
              <hr className="h-px my-1 bg-gray-500 border-0 dark:bg-gray-500"></hr>
     
              <input
                        type="text"
                        id="nomProjet"
                        value={rating}
                        placeholder="Rate freelancer out of 5"
                        onChange={(event) => setRating(event.target.value)}
                        className='pb-2 pr-[580px] focus:outline-none  '
                    />
             <div className='flex justify-end ml-40'>
             <button type='submit'
             className=''
             >Send</button>
             </div>
        </div>
       
      </form>
      <hr className="h-px my-1 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      {comment.map((comm, i) => (
                    comm && comm.profileID === id ? (
      <div key={i} >
      <div className='flex mt-8 mb-2'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width={45} className='rounded-full'/>
        </div>
        <div className='ml-4'>
        <p className='mb-1 font-bold'>{comm.username}</p>
        <StarIcon style={{ fontSize: 25, color: "#FFD500" }} /> {comm.rating}  <span className='text-xs '>{comm.time}</span>
        </div>
       </div>
       <p>{comm.description}</p>
       </div>
       ) : null
      ))}
    </div>
  )
}

